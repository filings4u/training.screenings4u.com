(function(){
  'use strict';
  var SUPABASE='https://elpbnytpciqnbexiaebp.supabase.co';
  var CATALOG=SUPABASE+'/functions/v1/screenings4u-training-catalog';
  var PAYMENT=SUPABASE+'/functions/v1/lms-create-payment-intent';
  var FINALIZE=SUPABASE+'/functions/v1/training-payment-finalize';
  var STRIPE_KEY='pk_live_51U8CQJEHE8bc4Otur9RVR1HsajJbmSbmRr5z0jGw1v5jgrKrzmnaaRTIV5v5CbEZIwFJLujrU0AI3lOZFDaNg4CG005XAPqkx3';
  var params=new URLSearchParams(location.search);
  var slug=(params.get('service')||'').trim();
  var status=document.getElementById('checkoutStatus');
  var paymentLoading=document.getElementById('paymentLoading');
  var submitBtn=document.getElementById('submitPayment');
  var form=document.getElementById('trainingCheckoutForm');
  var missing=document.getElementById('missingProduct');
  var selected=null, stripe=null, elements=null, paymentElement=null, creatingIntent=false;

  function setStatus(msg,type){
    status.textContent=msg||'';
    status.className='checkout-status'+(type?' checkout-'+type:'');
  }
  function money(v,c){return new Intl.NumberFormat('en-US',{style:'currency',currency:(c||'usd').toUpperCase(),maximumFractionDigits:2,minimumFractionDigits:Number(v)%1?2:0}).format(Number(v||0));}
  function field(id){return document.getElementById(id).value.trim();}
  function validateForSubmit(){
    var required=['firstName','lastName','email','line1','city','state','postalCode'];
    for(var i=0;i<required.length;i++){
      var el=document.getElementById(required[i]);
      if(!el.value.trim()){el.focus();setStatus('Please complete all required fields.','error');return false;}
    }
    if(!document.getElementById('email').checkValidity()){
      document.getElementById('email').focus();setStatus('Enter a valid email address.','error');return false;
    }
    return true;
  }
  function formatType(kind,seats){
    if(kind==='group'||Number(seats)>1) return 'Team training plan';
    if(kind==='course') return 'Individual course';
    if(kind==='extension') return 'Course extension';
    if(kind==='supplies') return 'Training product';
    return 'Training plan';
  }
  function renderList(boxId,listId,items){
    var box=document.getElementById(boxId);
    var list=document.getElementById(listId);
    list.innerHTML='';
    if(!Array.isArray(items)||!items.length){box.hidden=true;return;}
    items.forEach(function(item){var li=document.createElement('li');li.textContent=String(item);list.appendChild(li);});
    box.hidden=false;
  }
  function mountStripe(){
    if(!selected||!selected.price||typeof Stripe!=='function') return;
    try{
      stripe=Stripe(STRIPE_KEY);
      elements=stripe.elements({
        mode:'payment',
        amount:Math.round(Number(selected.price.amount)*100),
        currency:String(selected.price.currency||'usd').toLowerCase(),
        appearance:{theme:'stripe',variables:{colorPrimary:'#ff6b00',colorText:'#173761',borderRadius:'9px',fontFamily:'Inter, Arial, sans-serif'}}
      });
      paymentElement=elements.create('payment',{layout:'tabs'});
      paymentElement.mount('#payment-element');
      paymentElement.on('ready',function(){
        paymentLoading.hidden=true;
        submitBtn.hidden=false;
      });
      paymentElement.on('loaderror',function(event){
        paymentLoading.hidden=false;
        paymentLoading.innerHTML='<div><strong>Stripe could not load.</strong><span>'+((event&&event.error&&event.error.message)||'Refresh the page and try again.')+'</span></div>';
      });
    }catch(e){
      paymentLoading.hidden=false;
      paymentLoading.innerHTML='<div><strong>Stripe could not load.</strong><span>'+String(e.message||'Refresh the page and try again.')+'</span></div>';
    }
  }
  async function loadProduct(){
    if(!slug){
      missing.hidden=false;
      document.getElementById('summaryName').textContent='No training plan selected';
      paymentLoading.innerHTML='<div><strong>No training plan selected.</strong></div>';
      return;
    }
    try{
      var res=await fetch(CATALOG+'?slugs='+encodeURIComponent(slug)+'&_='+Date.now(),{cache:'no-store'});
      if(!res.ok) throw new Error('Unable to load the training catalog.');
      var data=await res.json();
      selected=(data.products||[])[0];
      if(!selected||!selected.price) throw new Error('This training plan is not currently available.');
      var meta=selected.metadata||{};
      var seats=Number(selected.seat_count||1);
      document.getElementById('summaryName').textContent=selected.name;
      document.getElementById('summaryPrice').textContent=money(selected.price.amount,selected.price.currency);
      document.getElementById('summarySeats').textContent=seats;
      document.getElementById('summaryPerLearner').textContent=money(Number(selected.price.amount)/Math.max(1,seats),selected.price.currency);
      var accessRow=document.getElementById('summaryAccess').closest('.summary-meta-row');
      if(meta.access_label||selected.access_days){document.getElementById('summaryAccess').textContent=meta.access_label||(selected.access_days+' days');if(accessRow)accessRow.hidden=false;}else if(accessRow){accessRow.hidden=true;}
      document.getElementById('summaryType').textContent=formatType(selected.product_kind,seats);
      var desc=meta.checkout_summary||selected.description||'';
      var descEl=document.getElementById('summaryDescription');
      if(desc){descEl.textContent=desc;descEl.hidden=false;}else{descEl.hidden=true;}
      renderList('summaryPlanDetails','summaryIncludes',meta.whats_included||meta.includes);
      renderList('summaryCourseOutline','summaryOutline',meta.course_outline);
      renderList('summaryRequirements','summaryRequirementsList',meta.requirements);
      mountStripe();
    }catch(e){
      missing.hidden=false;
      missing.textContent=e.message||'Unable to load this training plan.';
      paymentLoading.innerHTML='<div><strong>Payment unavailable.</strong><span>'+String(e.message||'Unable to load this training plan.')+'</span></div>';
      setStatus(e.message,'error');
    }
  }

  async function submitPayment(e){
    e.preventDefault();
    if(!validateForSubmit()) return;
    if(!stripe||!elements){setStatus('Stripe is still loading. Please wait a moment.','error');return;}
    if(creatingIntent) return;
    creatingIntent=true;
    submitBtn.disabled=true;
    submitBtn.textContent='Processing…';
    setStatus('');
    try{
      var submitResult=await elements.submit();
      if(submitResult.error) throw new Error(submitResult.error.message||'Please check your payment details.');

      var body={
        product:selected.slug,
        customer:{firstName:field('firstName'),lastName:field('lastName'),email:field('email'),phone:field('phone'),companyName:field('companyName')},
        billing:{line1:field('line1'),line2:field('line2'),city:field('city'),state:field('state').toUpperCase(),postalCode:field('postalCode')}
      };
      var res=await fetch(PAYMENT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
      var data=await res.json();
      if(!res.ok||!data.clientSecret) throw new Error(data.error||'Unable to start secure checkout.');

      var returnUrl=new URL('success.html',location.href);
      returnUrl.searchParams.set('order',data.orderId);
      var result=await stripe.confirmPayment({
        elements:elements,
        clientSecret:data.clientSecret,
        confirmParams:{return_url:returnUrl.href},
        redirect:'if_required'
      });
      if(result.error) throw new Error(result.error.message||'Payment could not be completed.');
      if(result.paymentIntent&&result.paymentIntent.status==='succeeded'){
        var finalizeRes=await fetch(FINALIZE,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({paymentIntentId:result.paymentIntent.id,clientSecret:data.clientSecret})});
        var finalized=await finalizeRes.json().catch(function(){return {};});
        if(!finalizeRes.ok) throw new Error(finalized.error||'Payment succeeded but order finalization failed. Please contact support with your payment reference.');
        var successUrl=new URL('success.html',location.href);
        successUrl.searchParams.set('order',finalized.orderId||data.orderId);
        successUrl.searchParams.set('payment_intent',result.paymentIntent.id);
        successUrl.searchParams.set('payment_intent_client_secret',data.clientSecret);
        location.href=successUrl.href;
        return;
      }
      setStatus('Payment submitted. Please wait for confirmation.','success');
    }catch(err){
      setStatus(err.message||'Payment could not be completed.','error');
      submitBtn.disabled=false;
      submitBtn.textContent='Pay securely';
      creatingIntent=false;
    }
  }

  form.addEventListener('submit',submitPayment);
  loadProduct();
})();
