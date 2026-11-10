(() => {
  "use strict";
  const API="https://elpbnytpciqnbexiaebp.supabase.co/functions/v1/training-contact-submit";
  const form=document.getElementById("contactForm");
  const button=document.getElementById("contactSubmit");
  const status=document.getElementById("contactStatus");
  const confirmed=document.getElementById("contactConfirmation");
  if(!form||!button||!status||!confirmed)return;
  const value=id=>document.getElementById(id)?.value.trim()||"";
  const show=(message,error=false)=>{status.textContent=message;status.hidden=false;status.classList.toggle("is-error",error)};
  let busy=false;
  form.addEventListener("submit",async event=>{
    event.preventDefault();
    if(busy)return;
    if(!form.reportValidity())return;
    const fields=["givenName","familyName","email","topic","message"];
    for(const name of fields){if(!value(name)){show("Please complete all required fields.",true);document.getElementById(name).focus();return}}
    if(value("message").length<10){show("Please provide at least 10 characters in your message.",true);document.getElementById("message").focus();return}
    busy=true;button.disabled=true;button.textContent="Sending Inquiry…";show("Securely sending your message…");
    try{
      const response=await fetch(API,{method:"POST",mode:"cors",cache:"no-store",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        firstName:value("givenName"),lastName:value("familyName"),email:value("email"),
        phone:value("phone"),organization:value("organization"),topic:value("topic"),
        message:value("message"),website:value("website")
      })});
      const data=await response.json().catch(()=>({}));
      if(!response.ok||!data.ok)throw new Error(data.error||"Your inquiry could not be submitted. Please try again.");
      form.hidden=true;status.hidden=true;
      document.getElementById("contactReference").textContent=data.reference||"";
      confirmed.hidden=false;confirmed.focus();
    }catch(error){show(error?.message||"Unable to submit your inquiry. Please try again.",true)}
    finally{busy=false;button.disabled=false;button.innerHTML='Send Inquiry <span aria-hidden="true">→</span>'}
  });
  document.getElementById("contactNewInquiry")?.addEventListener("click",()=>{
    form.reset();form.hidden=false;confirmed.hidden=true;status.hidden=true;form.querySelector("input")?.focus();
  });
})();