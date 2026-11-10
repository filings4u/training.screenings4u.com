(() => {
  "use strict";
  function initializeNavigation() {
    const header = document.getElementById("workforceHeader");
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