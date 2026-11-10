(()=>{
"use strict";
const ROOT= document.getElementById("workforceHeader");
const FOOT= document.getElementById("workforceFooter");
const logo="/images/logo.png";
const links={
courses:[["DOT Specimen Collector","Collection procedures and qualification","dot-specimen-collector-training.html"],["DER Training","Employer representative responsibilities","der-training.html"],["Supervisor Training","Reasonable-suspicion decisions","supervisor-training.html"],["Employee Training","Workplace drug and alcohol awareness","employee-training.html"],["HazMat Training","Hazardous materials safety","hazmat-training.html"],["All Courses & Pricing","Explore available programs","pricing.html"]],
solutions:[["Group Training","Enrollment for teams and employers","group-training.html"],["Collector Training Kits","Practice supplies and materials","collector-training-supplies.html"],["Course Extensions","Additional course access","course-extension.html"]],
resources:[["Student Sign In","Access assigned training","https://lms.screenings4u.com/training-login.html"],["Training Catalog","Courses and pricing","pricing.html"],["Training Supplies","Mock collection materials","collector-training-supplies.html"],["Course Extensions","Continue a current enrollment","course-extension.html"]]
};
const icon='<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';
const safe=(s)=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const art={flask:'<path d="M9 3h6m-5 0v7l-5.6 8.8A2 2 0 0 0 6.1 22h11.8a2 2 0 0 0 1.7-3.2L14 10V3M8 15h8"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8  --- TRUNCATED --- 7,410 chars