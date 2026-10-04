(function(){
  'use strict';
  function q(s,c){return (c||document).querySelector(s)}
  function qa(s,c){return Array.from((c||document).querySelectorAll(s))}
  function setBodyLock(){
    var open=!!q('.primary-nav.open')||!!q('.training-site-header.training-mobile-open');
    document.body.classList.toggle('nav-open',open&&window.innerWidth<=1080);
  }
  function closeStatic(){
    var nav=q('.primary-nav'),btn=q('.menu-toggle');
    if(nav)nav.classList.remove('open');
    if(btn){btn.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Open navigation')}
    qa('.nav-group.open').forEach(function(g){g.classList.remove('open');var t=q('.nav-trigger',g);if(t)t.setAttribute('aria-expanded','false')});
  }
  function closeTraining(){
    var h=q('.training-site-header'),btn=q('.training-mobile-toggle');
    if(h)h.classList.remove('training-mobile-open');
    if(btn){btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Open training navigation')}
  }
  document.addEventListener('click',function(e){
    var menu=e.target.closest('.menu-toggle');
    if(menu){
      setTimeout(function(){menu.classList.toggle('open',!!q('.primary-nav.open'));setBodyLock()},0);
      return;
    }
    var training=e.target.closest('.training-mobile-toggle');
    if(training){setTimeout(setBodyLock,0);return}
    if(window.innerWidth<=1080&&e.target.closest('.primary-nav a')&&!e.target.closest('.nav-trigger')){closeStatic();setBodyLock()}
    if(window.innerWidth<=1080&&e.target.closest('.training-header-nav a')){closeTraining();setBodyLock()}
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){closeStatic();closeTraining();setBodyLock()}
  });
  window.addEventListener('resize',function(){
    if(window.innerWidth>1080){closeStatic();closeTraining();setBodyLock()}
  });
})();
