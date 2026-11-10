(() => {
  "use strict";
  // This is the single authoritative footer template for all website pages.
  // Existing HTML stays as a fallback for visitors without JavaScript.
  const canonicalFooter = "<footer id=\"workforceFooter\" class=\"wt-footer\"><div class=\"wt-footer-grid\"><div class=\"wt-footer-brand\"><a href=\"/\"><img src=\"/images/logo.png?v=c51b4da8\" width=\"220\" height=\"77\" alt=\"Workforce Training by screenings4u\" decoding=\"async\"></a><p>Industry-focused online DOT and workplace training for individuals and employer teams.</p></div><div><h3>Training</h3><a href=\"pricing.html\">All Courses</a><a href=\"dot-specimen-collector-training.html\">Specimen Collector</a><a href=\"der-training.html\">DER Training</a><a href=\"supervisor-training.html\">Supervisor Training</a><a href=\"employee-training.html\">Employee Training</a><a href=\"hazmat-training.html\">HazMat Training</a></div><div><h3>For Organizations</h3><a href=\"group-training.html\">Group Training</a><a href=\"collector-training-supplies.html\">Training Supplies</a><a href=\"course-extension.html\">Course Extensions</a></div><div><h3>Resources</h3><a href=\"https://lms.screenings4u.com/training-login.html\">Student Sign In</a><a href=\"https://lms.screenings4u.com/lms-my-courses.html\">My Courses</a><a href=\"https://lms.screenings4u.com/lms-certificates.html\">Certificates</a></div><div><h3>Company</h3><a href=\"terms.html\">Terms & Conditions</a><a href=\"privacy.html\">Privacy Policy</a><a href=\"disclaimer.html\">Disclaimer</a></div></div><div class=\"wt-footer-bottom\"><span class=\"wt-copyright\">© 2026 Workforce Training by screenings4u. <span class=\"wt-rights\">All rights reserved.</span></span><span><a href=\"terms.html\">Terms</a><a href=\"privacy.html\">Privacy</a><a href=\"disclaimer.html\">Disclaimer</a></span></div></footer>";
  // Keep footer branding identical even where legacy page CSS differs.
  function standardizeFooterLogo() {
    if (document.getElementById("wt-footer-brand-sizing")) return;
    const style = document.createElement("style");
    style.id = "wt-footer-brand-sizing";
    style.textContent = `
      #workforceFooter .wt-footer-brand>a { background:transparent!important;padding:0!important;border-radius:0!important; }
      #workforceFooter .wt-footer-brand img { display:block!important;width:200px!important;max-width:200px!important;height:auto!important;object-fit:contain!important; }
      @media(max-width:850px) {
        #workforceFooter .wt-footer-brand img { width:180px!important;max-width:180px!important; }
      }
    `;
    document.head.appendChild(style);
  }
  function synchronizeFooter() {
    standardizeFooterLogo();
    const existing = document.getElementById("workforceFooter");
    if (!existing) return;
    if (existing.outerHTML !== canonicalFooter) {
      const holder = document.createElement("div");
      holder.innerHTML = canonicalFooter;
      existing.replaceWith(holder.firstElementChild);
    }
    const copyright = document.querySelector("#workforceFooter .wt-copyright");
    if (copyright && copyright.firstChild) {
      copyright.firstChild.textContent =
        "© " + new Date().getFullYear() + " Workforce Training by screenings4u. ";
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", synchronizeFooter, {once:true});
  } else synchronizeFooter();
})();
