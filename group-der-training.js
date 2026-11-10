(() => {
  "use strict";
  const endpoint = "https://elpbnytpciqnbexiaebp.supabase.co/functions/v1/screenings4u-training-catalog";
  const cards = [...document.querySelectorAll(".gt-plan[data-product-slug]")];
  if (!cards.length) return;
  const money = (amount, currency) => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: String(currency || "USD").toUpperCase(),
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Number(amount));
  for (const card of cards) {
    const button = card.querySelector("[data-checkout-product]");
    if (!button) continue;
    button.removeAttribute("href");
    button.setAttribute("aria-disabled", "true");
  }
  const slugs = cards.map(card => card.dataset.productSlug);
  const url = endpoint + "?slugs=" + encodeURIComponent(slugs.join(","));
  fetch(url, { headers: { Accept: "application/json" }, cache: "no-store" })
    .then(response => {
      if (!response.ok) throw new Error("Live training catalog unavailable");
      return response.json();
    })
    .then(payload => {
      const products = new Map((payload.products || []).map(product => [product.slug, product]));
      for (const card of cards) {
        const product = products.get(card.dataset.productSlug);
        const priceEl = card.querySelector("[data-price]");
        const seatEl = card.querySelector("[data-unit]");
        const button = card.querySelector("[data-checkout-product]");
        const seats = Number(card.dataset.seats);
        if (!priceEl || !seatEl || !button) continue;
        if (!product || product.product_kind !== "group" || !product.price ||
            !Number.isFinite(Number(product.price.amount)) || Number(product.price.amount) <= 0 ||
            Number(product.seat_count) !== seats) {
          priceEl.textContent = "Price unavailable";
          seatEl.textContent = "Please contact Workforce Training";
          continue;
        }
        priceEl.textContent = money(product.price.amount, product.price.currency);
        seatEl.textContent = money(Number(product.price.amount) / seats, product.price.currency) + " per learner";
        button.href = "checkout.html?service=" + encodeURIComponent(product.slug);
        button.removeAttribute("aria-disabled");
      }
    })
    .catch(() => {
      for (const card of cards) {
        const price = card.querySelector("[data-price]");
        const seat = card.querySelector("[data-unit]");
        if (price) price.textContent = "Pricing temporarily unavailable";
        if (seat) seat.textContent = "Please try again later";
      }
    });
})();
