// Page-specific FAQ behavior. Shared navigation and footer are owned by their own scripts.
document.querySelectorAll(".sol-faq-list details").forEach(item=>{item.addEventListener("toggle",()=>{if(item.open){document.querySelectorAll(".sol-faq-list details").forEach(other=>{if(other!==item)other.open=false;});}});});
