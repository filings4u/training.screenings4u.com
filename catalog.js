(function(){
  'use strict';
  var CATALOG_ENDPOINT='https://elpbnytpciqnbexiaebp.supabase.co/functions/v1/screenings4u-training-catalog';
  function money(value,currency){
    return new Intl.NumberFormat('en-US',{style:'currency',currency:(currency||'usd').toUpperCase(),maximumFractionDigits:2,minimumFractionDigits:Number(value)%1?2:0}).format(Number(value||0));
  }
  function getSlugs(){
    var set=new Set();
    document.querySelectorAll('[data-product-slug],[data-price-for],[data-checkout-product]').forEach(function(el){
      var slug=el.getAttribute('data-product-slug')||el.getAttribute('data-price-for')||el.getAttribute('data-checkout-product');
      if(slug)set.add(slug);
    });
    return Array.from(set);
  }
  function setLoading(){
    document.querySelectorAll('[data-price-for]').forEach(function(el){el.textContent='—';});
    document.querySelectorAll('[data-checkout-product]').forEach(function(el){
      el.removeAttribute('href');
      el.setAttribute('aria-disabled','true');
      el.classList.add('is-disabled');
    });
  }
  async function loadCatalog(slugs){
    var url=CATALOG_ENDPOINT+'?slugs='+encodeURIComponent(slugs.join(','))+'&_='+Date.now();
    var res=await fetch(url,{headers:{Accept:'application/json'},cache:'no-store'});
    if(!res.ok)throw new Error('Training catalog unavailable');
    var data=await res.json();
    return Array.isArray(data.products)?data.products:[];
  }
  function apply(products){
    var map=new Map(products.map(function(p){return [p.slug,p];}));
    document.querySelectorAll('[data-product-slug]').forEach(function(card){
      var slug=card.getAttribute('data-product-slug');
      var p=map.get(slug);
      if(!p||!p.price){card.setAttribute('data-catalog-error','true');return;}
      card.setAttribute('data-catalog-loaded','true');
      var price=card.querySelector('[data-price-for],.price');
      if(price)price.textContent=money(p.price.amount,p.price.currency);
      var btn=card.querySelector('[data-checkout-product]');
      if(btn){
        btn.href='checkout.html?service='+encodeURIComponent(p.slug);
        btn.removeAttribute('aria-disabled');
        btn.classList.remove('is-disabled');
      }
    });
    document.querySelectorAll('[data-price-for]').forEach(function(el){
      var p=map.get(el.getAttribute('data-price-for'));
      if(p&&p.price)el.textContent=money(p.price.amount,p.price.currency);
    });
    window.S4UTrainingCatalog=map;
    document.dispatchEvent(new CustomEvent('s4u:training-catalog',{detail:{products:products}}));
  }
  var slugs=getSlugs();
  if(!slugs.length)return;
  setLoading();
  loadCatalog(slugs).then(apply).catch(function(){
    document.documentElement.setAttribute('data-catalog-error','true');
    document.querySelectorAll('[data-price-for]').forEach(function(el){el.textContent='Unavailable';});
  });
})();
