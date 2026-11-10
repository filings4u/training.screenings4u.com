(() => {
  "use strict";
  const cards = [...document.querySelectorAll(".blog-card")];
  const buttons = [...document.querySelectorAll("[data-filter]")];
  const input = document.querySelector("#blog-search-input");
  const empty = document.querySelector(".blog-no-results");
  let category = "All";
  function filter() {
    const q = (input?.value || "").toLocaleLowerCase().trim();
    let count = 0;
    cards.forEach(card => {
      const visible = (category === "All" || card.dataset.category === category) &&
        (!q || (card.dataset.search || "").includes(q));
      card.hidden = !visible;
      if (visible) count++;
    });
    if (empty) empty.hidden = count > 0;
  }
  buttons.forEach(button => button.addEventListener("click", () => {
    category = button.dataset.filter || "All";
    buttons.forEach(b => {
      const active = b === button;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", String(active));
    });
    filter();
  }));
  input?.addEventListener("input", filter);
  buttons.forEach(b => b.setAttribute("aria-pressed", String(b.classList.contains("is-active"))));
})();