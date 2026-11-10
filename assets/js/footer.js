(() => {
  "use strict";
  // Footer markup is authored directly in each HTML page so it always remains visible.
  // This script only keeps the copyright year current.
  const host = document.getElementById("workforceFooter");
  if (!host) return;
  const copyright = host.querySelector(".wt-footer-bottom > span:first-child");
  if (copyright) copyright.textContent = "© " + new Date().getFullYear() + " Workforce Training by screenings4u. All rights reserved.";
})();
