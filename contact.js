(() => {
  "use strict";
  const form=document.getElementById("contactForm");
  if(!form)return;
  form.addEventListener("submit",event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const value=id=>document.getElementById(id).value.trim();
    const topic=value("topic");
    const body=[
      "Name: "+value("givenName")+" "+value("familyName"),
      "Email: "+value("email"),
      "Phone: "+(value("phone")||"Not provided"),
      "Organization: "+(value("organization")||"Not provided"),
      "Inquiry type: "+topic,
      "",
      value("message")
    ].join("\n");
    const mail="mailto:support@screenings4u.com?subject="+encodeURIComponent("Workforce Training: "+topic)+"&body="+encodeURIComponent(body);
    window.location.href=mail;
    document.getElementById("contactStatus").textContent="Your email application should open with the message prepared. Please review and send it there.";
  });
})();
