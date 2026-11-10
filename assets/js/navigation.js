(() => {
  "use strict";
  const host = document.getElementById("workforceHeader");
  if (!host) return;

  const groups = {
    courses: {
      title: "Courses", heading: "Find your next course",
      items: [
        ["DOT Specimen Collector", "Collection procedures and qualification", "dot-specimen-collector-training.html"],
        ["DER Training", "Employer representative responsibilities", "der-training.html"],
        ["Supervisor Training", "Reasonable-suspicion decisions", "supervisor-training.html"],
        ["Employee Training", "Workplace drug and alcohol awareness", "employee-training.html"],
        ["HazMat Training", "Hazardous materials safety", "hazmat-training.html"],
        ["All Courses & Pricing", "Explore available programs", "pricing.html"]
      ]
    },
    solutions: {
      title: "Solutions", heading: "Train your workforce",
      items: [
        ["Group Training", "Enrollment for teams and employers", "group-training.html"],
        ["Collector Training Kits", "Practice supplies and materials", "collector-training-supplies.html"],
        ["Course Extensions", "Additional course access", "course-extension.html"]
      ]
    },
    resources: {
      title: "Resources", heading: "Support for learners",
      items: [
        ["Student Sign In", "Access assigned training", "https://lms.screenings4u.com/training-login.html"],
        ["Training Catalog", "Courses and pricing", "pricing.html"],
        ["Training Supplies", "Mock collection materials", "collector-training-supplies.html"],
        ["Course Extensions", "Continue a current enrollment", "course-extension.html"]
      ]
    }
  };
  const chevron = '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const glyphs = [
    '<path d="M9 3h6m-5 0v7l-5.6 8.8A2 2 0 0 0 6.1 22h11.8a2 2 0 0 0 1.7-3.2L14 10V3M8 15h8"/>',
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8m10 10v-2a4 4 0 0 0-3-3.87"/>',
    '<path d="M2 18h20M5 18v-5a7 7 0 0 1 14 0v5M9 6v7m6-7v7"/>',
    '<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
    '<path d="M12 2 2 20h20L12 2Zm0 7v5m0 3h.01"/>',
    '<path d="M12 7v14M3 18V4a2 2 0 0 1 2-2h4a3 3 0 0 1 3 3 3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v14H15a3 3 0 0 0-3 3 3 3 0 0 0-3-3H3Z"/>',
    '<path d="m12 2 9 5-9 5-9-5 9-5Zm-9 5v10l9 5 9-5V7M12 12v10"/>',
    '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
  ];
  const glyph = index => '<svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + glyphs[index % glyphs.length] + '</svg>';
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const renderGroup = key => {
    const section = groups[key];
    const iconOrders = { courses:[0,1,2,3,4,5], solutions:[1,6,7], resources:[3,5,6,7] };
    const items = section.items.map(([name,description,url],index) =>
      '<a href="' + url + '"><span class="wt-mega-icon wt-mega-icon-' + key + '">' + glyph(iconOrders[key][index]) + '</span><span><strong>' + escape(name) + '</strong><small>' + escape(description) + '</small></span><span class="wt-mega-arrow" aria-hidden="true">→</span></a>'
    ).join("");
    return '<div class="wt-dropdown"><button type="button" class="wt-drop-trigger" aria-controls="wt-' + key + '" aria-expanded="false">' + section.title + chevron + '</button><div id="wt-' + key + '" class="wt-mega" hidden><div class="wt-mega-layout"><div class="wt-mega-intro"><span>WORKFORCE TRAINING</span><h2>' + section.heading + '</h2><p>Professional, role-focused learning from Workforce Training by screenings4u.</p><a class="wt-mega-all" href="pricing.html">Browse all training <span aria-hidden="true">→</span></a></div><div class="wt-mega-links">' + items + '</div></div></div></div>';
  };
  host.className = "wt-header";
  if (!host.querySelector(".wt-header-inner")) host.innerHTML = '<div class="wt-header-inner"><a class="wt-brand" href="index.html" aria-label="Workforce Training home"><img src="images/logo.png" width="220" height="77" alt="Workforce Training by screenings4u" decoding="async"></a><button class="wt-mobile-toggle" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span><span></span></button><nav class="wt-nav" aria-label="Primary navigation"><a class="wt-home-link" href="index.html">Home</a>' + renderGroup("courses") + '<a href="group-training.html">Group Training</a>' + renderGroup("solutions") + renderGroup("resources") + '<a class="wt-signin" href="https://lms.screenings4u.com/training-login.html">Sign In</a></nav></div>';
  const nav = host.querySelector(".wt-nav");
  const mobileToggle = host.querySelector(".wt-mobile-toggle");
  function closeMenus(except) {
    host.querySelectorAll(".wt-dropdown").forEach(group => {
      if (group === except) return;
      group.classList.remove("is-open");
      group.querySelector(".wt-drop-trigger").setAttribute("aria-expanded", "false");
      group.querySelector(".wt-mega").hidden = true;
    });
  }
  host.querySelectorAll(".wt-drop-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const group = trigger.closest(".wt-dropdown");
      const open = trigger.getAttribute("aria-expanded") !== "true";
      closeMenus(group);
      group.classList.toggle("is-open", open);
      trigger.setAttribute("aria-expanded", String(open));
      group.querySelector(".wt-mega").hidden = !open;
    });
  });
  mobileToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    mobileToggle.setAttribute("aria-expanded", String(open));
    if (!open) closeMenus();
  });
  document.addEventListener("click", event => { if (!host.contains(event.target)) closeMenus(); });
  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    closeMenus();
    nav.classList.remove("is-open");
    mobileToggle.setAttribute("aria-expanded", "false");
  });
  const current = location.pathname.split("/").pop() || "index.html";
  host.querySelectorAll(".wt-nav > a").forEach(link => {
    if (link.getAttribute("href") === current) link.setAttribute("aria-current", "page");
  });
})();