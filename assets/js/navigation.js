(() => {
  "use strict";
  function initializeNavigation() {
    const header = document.getElementById("workforceHeader");
    if (header && !header.querySelector(".wt-header-inner")) {
      header.innerHTML = "<div class=\"wt-header-inner\"><a class=\"wt-brand\" href=\"/\" aria-label=\"Workforce Training home\"><img src=\"/images/logo.png\" width=\"220\" height=\"77\" alt=\"Workforce Training by screenings4u\" decoding=\"async\"></a><button class=\"wt-mobile-toggle\" type=\"button\" aria-label=\"Open navigation\" aria-expanded=\"false\"><span></span><span></span><span></span></button><nav class=\"wt-nav\" aria-label=\"Primary navigation\"><a class=\"wt-home-link\" href=\"/\">Home</a><div class=\"wt-dropdown\"><button type=\"button\" class=\"wt-drop-trigger\" aria-expanded=\"false\" aria-controls=\"wt-courses\">Courses<svg viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"/></svg></button><div id=\"wt-courses\" class=\"wt-mega\" hidden><div class=\"wt-mega-layout\"><div class=\"wt-mega-intro\"><span>WORKFORCE TRAINING</span><h2>Find your next course</h2><p>Professional, role-focused learning from Workforce Training by screenings4u.</p><a class=\"wt-mega-all\" href=\"pricing.html\">Browse all training <span aria-hidden=\"true\">→</span></a></div><div class=\"wt-mega-links\"><a href=\"dot-specimen-collector-training.html\"><span class=\"wt-mega-icon wt-mega-icon-courses\"><svg viewBox=\"0 0 24 24\" width=\"23\" height=\"23\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 3h6m-5 0v7l-5.6 8.8A2 2 0 0 0 6.1 22h11.8a2 2 0 0 0 1.7-3.2L14 10V3M8 15h8\"/></svg></span><span><strong>DOT Specimen Collector</strong><small>Collection procedures and qualification</small></span><span class=\"wt-mega-arrow\" aria-hidden=\"true\">→</span></a><a href=\"der-training.html\"><span class=\"wt-mega-icon wt-mega-icon-courses\"><svg viewBox=\"0 0 24 24\" width=\"23\" height=\"23\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8\"/></svg></span><span><strong>DER Training</strong><small>Employer representative responsibilities</small></span><span class=\"wt-mega-arrow\" aria-hidden=\"true\">→</span></a><a href=\"supervisor-training.html\"><span class=\"wt-mega-icon wt-mega-icon-courses\"><svg viewBox=\"0 0 24 24\" width=\"23\" height=\"23\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M2 18h20M5 18v-5a7 7 0 0 1 14 0v5M9 6v7m6-7v7\"/></svg></span><span><strong>Supervisor Training</strong><small>Reasonable-suspicion decisions</small></span><span class=\"wt-mega-arrow\" aria-hidden=\"true\">→</span></a><a href=\"employee-training.html\"><span class=\"wt-mega-icon wt-mega-icon-courses\"><svg viewBox=\"0 0 24 24\" width=\"23\" height=\"23\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21v-2a8 8 0 0 1 16 0v2\"/></svg></span><span><strong>Employee Training</strong><small>Workplace drug and alcohol awareness</small></span><span class=\"wt-mega-arrow\" aria-hidden=\"true\">→</span></a><a href=\"hazmat-training.html\"><span class=\"wt-mega-icon wt-mega-icon-courses\"><svg viewBox=\"0 0 24 24\" width=\"23\" height=\"23\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 2 2 20h20L12 2Zm0 7v5m0 3h.01\"/></svg></span><span><strong>HazMat Training</strong><small>Hazardous materials safety</small></span><span class=\"wt-mega-arrow\" aria-hidden=\"true\">→</span></a><a href=\"pricing.html\"><span class=\"wt-mega-icon wt-mega-icon-courses\"><svg viewBox=\"0 0 24 24\" width=\"23\" height=\"23\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 7v14M3 18V4a2 2 0 0 1 2-2h4a3 3 0 0 1 3 3 3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v14H15a3 3 0 0 0-3-3H3Z\"/></svg></span><span><strong>All Courses & Pricing</strong><small>Explore available programs</small></span><span class=\"wt-mega-arrow\" aria-hidden=\"true\">→</span></a></div></div></div></div><a href=\"group-training.html\">Group Training</a><div class=\"wt-dropdown\"><button type=\"button\" class=\"wt-drop-trigger\" aria-expanded=\"false\" aria-controls=\"wt-solutions\">Solutions<svg viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"/></svg></button><div id=\"wt-solutions\" class=\"wt-mega\" hidden><div class=\"wt-mega-layout\"><div class=\"wt-mega-intro\"><span>WORKFORCE TRAINING</span><h2>Train your workforce</h2><p>Professional, role-focused learning from Workforce Training by screenings4u.</p><a class=\"wt-mega-all\" href=\"pricing.html\">Browse all training <span aria-hidden=\"true\">→</span></a></div><div class=\"wt-mega-links\"><a href=\"group-training.html\"><span class=\"wt-mega-icon wt-mega-icon-solutions\"><svg viewBox=\"0 0 24 24\" width=\"23\" height=\"23\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8\"/></svg></span><span><strong>Group Training</strong><small>Enrollment for teams and employers</small></span><span class=\"wt-mega-arrow\" aria-hidden=\"true\">→</span></a><a href=\"collector-training-supplies.html\"><span class=\"wt-mega-icon wt-mega-icon-solutions\"><svg viewBox=\"0 0 24 24\" width=\"23\" height=\"23\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m12 2 9 5-9 5-9-5 9-5Zm-9 5v10l9 5 9-5V7M12 12v10\"/></svg></span><span><strong>Collector Training Kits</strong><small>Practice supplies and materials</small></span><span class=\"wt-mega-arrow\" aria-hidden=\"true\">→</span></a><a href=\"course-extension.html\"><span class=\"wt-mega-icon wt-mega-icon-solutions\"><svg viewBox=\"0 0 24 24\" width=\"23\" height=\"23\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l3 2\"/></svg></span><span><strong>Course Extensions</strong><small>Additional course access</small></span><span class=\"wt-mega-arrow\" aria-hidden=\"true\">→</span></a></div></div></div></div><div class=\"wt-dropdown\"><button type=\"button\" class=\"wt-drop-trigger\" aria-expanded=\"false\" aria-controls=\"wt-resources\">Resources<svg viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"/></svg></button><div id=\"wt-resources\" class=\"wt-mega\" hidden><div class=\"wt-mega-layout\"><div class=\"wt-mega-intro\"><span>WORKFORCE TRAINING</span><h2>Support for learners</h2><p>Professional, role-focused learning from Workforce Training by screenings4u.</p><a class=\"wt-mega-all\" href=\"pricing.html\">Browse all training <span aria-hidden=\"true\">→</span></a></div><div class=\"wt-mega-links\"><a href=\"https://lms.screenings4u.com/training-login.html\"><span class=\"wt-mega-icon wt-mega-icon-resources\"><svg viewBox=\"0 0 24 24\" width=\"23\" height=\"23\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21v-2a8 8 0 0 1 16 0v2\"/></svg></span><span><strong>Student Sign In</strong><small>Access assigned training</small></span><span class=\"wt-mega-arrow\" aria-hidden=\"true\">→</span></a><a href=\"pricing.html\"><span class=\"wt-mega-icon wt-mega-icon-resources\"><svg viewBox=\"0 0 24 24\" width=\"23\" height=\"23\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 7v14M3 18V4a2 2 0 0 1 2-2h4a3 3 0 0 1 3 3 3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v14H15a3 3 0 0 0-3-3H3Z\"/></svg></span><span><strong>Training Catalog</strong><small>Courses and pricing</small></span><span class=\"wt-mega-arrow\" aria-hidden=\"true\">→</span></a><a href=\"collector-training-supplies.html\"><span class=\"wt-mega-icon wt-mega-icon-resources\"><svg viewBox=\"0 0 24 24\" width=\"23\" height=\"23\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"m12 2 9 5-9 5-9-5 9-5Zm-9 5v10l9 5 9-5V7M12 12v10\"/></svg></span><span><strong>Training Supplies</strong><small>Mock collection materials</small></span><span class=\"wt-mega-arrow\" aria-hidden=\"true\">→</span></a><a href=\"course-extension.html\"><span class=\"wt-mega-icon wt-mega-icon-resources\"><svg viewBox=\"0 0 24 24\" width=\"23\" height=\"23\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l3 2\"/></svg></span><span><strong>Course Extensions</strong><small>Continue a current enrollment</small></span><span class=\"wt-mega-arrow\" aria-hidden=\"true\">→</span></a></div></div></div></div><a class=\"wt-signin\" href=\"https://lms.screenings4u.com/training-login.html\">Sign In</a></nav></div>";
    }
    if (!header || header.dataset.navigationReady === "true") return;
    const nav = header.querySelector(".wt-nav");
    const mobileButton = header.querySelector(".wt-mobile-toggle");
    if (!nav || !mobileButton) return;
    header.dataset.navigationReady = "true";

    const dropdowns = [...header.querySelectorAll(".wt-dropdown")];

    function setDropdown(dropdown, expanded) {
      const button = dropdown.querySelector(".wt-drop-trigger");
      const panel = dropdown.querySelector(".wt-mega");
      if (!button || !panel) return;
      dropdown.classList.toggle("is-open", expanded);
      button.setAttribute("aria-expanded", String(expanded));
      panel.hidden = !expanded;
    }

    function closeDropdowns(except = null) {
      dropdowns.forEach(dropdown => {
        if (dropdown !== except) setDropdown(dropdown, false);
      });
    }

    header.addEventListener("click", event => {
      const button = event.target.closest(".wt-drop-trigger");
      if (!button || !header.contains(button)) return;
      event.preventDefault();
      const dropdown = button.closest(".wt-dropdown");
      if (!dropdown) return;
      const next = button.getAttribute("aria-expanded") !== "true";
      closeDropdowns(dropdown);
      setDropdown(dropdown, next);
    });

    mobileButton.addEventListener("click", () => {
      const expanded = nav.classList.toggle("is-open");
      mobileButton.setAttribute("aria-expanded", String(expanded));
      mobileButton.setAttribute("aria-label", expanded ? "Close navigation" : "Open navigation");
      if (!expanded) closeDropdowns();
    });

    document.addEventListener("click", event => {
      if (!header.contains(event.target)) closeDropdowns();
    });

    document.addEventListener("keydown", event => {
      if (event.key !== "Escape") return;
      closeDropdowns();
      nav.classList.remove("is-open");
      mobileButton.setAttribute("aria-expanded", "false");
      mobileButton.setAttribute("aria-label", "Open navigation");
    });

    const current = window.location.pathname.split("/").pop() || "index.html";
    header.querySelectorAll(".wt-nav > a").forEach(link => {
      if (link.getAttribute("href") === current) link.setAttribute("aria-current", "page");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeNavigation, { once: true });
  } else {
    initializeNavigation();
  }
})();