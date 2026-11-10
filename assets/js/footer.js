(() => {
  "use strict";
  // Keep the copyright year current without removing the separate rights line.
  const host = document.getElementById("workforceFooter");
  if (!host) return;
  const copyright = host.querySelector(".wt-copyright");
  if (!copyright) return;
  const year = new Date().getFullYear();
  copyright.firstChild.textContent = "© " + year + " Workforce Training by screenings4u. ";
})();
