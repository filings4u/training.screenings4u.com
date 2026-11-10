(() => {"use strict";
 const cards=[...document.querySelectorAll("[data-product-slug]")];if(!cards.length)return;
 const slugs=cards.map(x=>x.dataset.productSlug);
 const format=(a,c)=>new Intl.NumberFormat("en-US",{style:"currency",currency:(c||"USD").toUpperCase(),maximumFractionDigits:2}).format(Number(a));
 cards.forEach(card=>{card.querySelector("[data-price]")?.replaceChildren(document.createTextNode("Loading price…"));const a=card.querySelector("[data-checkout-product]");a?.removeAttribute("href");a?.setAttribute("aria-disabled","true");});
 fetch("https://elpbnytpciqnbexiaebp.supabase.co/functions/v1/screenings4u-training-catalog?slugs="+encodeURIComponent(slugs.join(",")),{cache:"no-store",headers:{Accept:"application/json"}}).then(r=>{if(!r.ok)throw Error("Catalog unavailable");return r.json()}).then(data=>{
 const products=new Map((data.products||[]).map(x=>[x.slug,x]));
 cards.forEach(card=>{const p=products.get(card.dataset.productSlug),price=card.querySelector("[data-price]"),unit=card.querySelector("[data-unit]"),a=card.querySelector("[data-checkout-product]");if(!p||!p.price||p.product_kind!=="group"){price.textContent="Contact us for pricing";return;}price.textContent=format(p.price.amount,p.price.currency);unit.textContent=format(Number(p.price.amount)/Number(card.dataset.seats),p.price.currency)+" per learner";a.href="checkout.html?service="+encodeURIComponent(p.slug);a.removeAttribute("aria-disabled");a.classList.remove("disabled");});
 }).catch(()=>cards.forEach(card=>{card.querySelector("[data-price]").textContent="Pricing temporarily unavailable";}));
})();