(()=>{
"use strict";
const FOOT=document.getElementById("workforceFooter");
const brandMarkup='<img src="images/logo.png" width="220" height="77" alt="Workforce Training by screenings4u" decoding="async">';
if(FOOT){
 FOOT.className="wt-footer";
 FOOT.innerHTML='<div class="wt-footer-grid"><div class="wt-footer-brand"><a href="index.html">'+brandMarkup+'</a><p>Industry-focused online DOT and workplace training for individuals and employer teams.</p></div><div><h3>Training</h3><a href="pricing.html">All Courses</a><a href="dot-specimen-collector-training.html">Specimen Collector</a><a href="der-training.html">DER Training</a><a href="supervisor-training.html">Supervisor Training</a><a href="employee-training.html">Employee Training</a><a href="hazmat-training.html">HazMat Training</a></div><div><h3>For Organizations</h3><a href="group-training.html">Group Training</a><a href="collector-training-supplies.html">Training Supplies</a><a href="course-extension.html">Course Extensions</a></div><div><h3>Resources</h3><a href="https://lms.screenings4u.com/training-login.html">Student Sign In</a><a href="https://lms.screenings4u.com/lms-my-courses.html">My Courses</a><a href="https://lms.screenings4u.com/lms-certificates.html">Certificates</a></div><div><h3>Company</h3><a href="terms.html">Terms &amp; Conditions</a><a href="privacy.html">Privacy Policy</a><a href="disclaimer.html">Disclaimer</a></div></div><div class="wt-footer-bottom"><span>© '+new Date().getFullYear()+' Workforce Training by screenings4u. All rights reserved.</span><span><a href="terms.html">Terms</a><a href="privacy.html">Privacy</a><a href="disclaimer.html">Disclaimer</a></span></div>';
}

})();