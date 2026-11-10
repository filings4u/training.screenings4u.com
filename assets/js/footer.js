(() => {
  "use strict";
  const host = document.getElementById("workforceFooter");
  if (!host) return;
  const sections = [
    ["Training", [
      ["All Courses","pricing.html"], ["Specimen Collector","dot-specimen-collector-training.html"],
      ["DER Training","der-training.html"], ["Supervisor Training","supervisor-training.html"],
      ["Employee Training","employee-training.html"], ["HazMat Training","hazmat-training.html"]
    ]],
    ["For Organizations", [
      ["Group Training","group-training.html"], ["Training Supplies","collector-training-supplies.html"],
      ["Course Extensions","course-extension.html"]
    ]],
    ["Resources", [
      ["Student Sign In","https://lms.screenings4u.com/training-login.html"],
      ["My Courses","https://lms.screenings4u.com/lms-my-courses.html"],
      ["Certificates","https://lms.screenings4u.com/lms-certificates.html"]
    ]],
    ["Company", [
      ["Terms & Conditions","terms.html"], ["Privacy Policy","privacy.html"], ["Disclaimer","disclaimer.html"]
    ]]
  ];
  const brand = '<img src="/images/logo.png" width="220" height="77" alt="Workforce Training by screenings4u" decoding="async">';
  const columns = sections.map(([heading,links]) =>
    '<div><h3>' + heading + '</h3>' + links.map(([label,url]) => '<a href="' + url + '">' + label + '</a>').join("") + '</div>'
  ).join("");
  host.className = "wt-footer";
  host.innerHTML = '<div class="wt-footer-grid"><div class="wt-footer-brand"><a href="/">' + brand + '</a><p>Industry-focused online DOT and workplace training for individuals and employer teams.</p></div>' + columns + '</div><div class="wt-footer-bottom"><span>© ' + new Date().getFullYear() + ' Workforce Training by screenings4u. All rights reserved.</span><span><a href="terms.html">Terms</a><a href="privacy.html">Privacy</a><a href="disclaimer.html">Disclaimer</a></span></div>';
})();