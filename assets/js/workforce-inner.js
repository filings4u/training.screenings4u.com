
const menuToggle=document.querySelector('.top .menu-toggle'),nav=document.querySelector('.top #nav');
function closeMega(except){document.querySelectorAll('.drop').forEach(d=>{if(d!==except){d.classList.remove('open');d.querySelector('button')?.setAttribute('aria-expanded','false')}})}
menuToggle.addEventListener('click',()=>{const expanded=nav.classList.toggle('show');menuToggle.setAttribute('aria-expanded',String(expanded));if(!expanded)closeMega()});
document.querySelectorAll('.drop>button').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();const d=b.closest('.drop'),next=!d.classList.contains('open');closeMega(d);d.classList.toggle('open',next);b.setAttribute('aria-expanded',String(next))}));
document.addEventListener('click',e=>{if(!e.target.closest('.drop'))closeMega()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMega();if(document.activeElement?.closest('.mega-menu'))document.activeElement?.closest('.drop')?.querySelector('button')?.focus()}});
