(function(){
  'use strict';
  var menuBtn=document.querySelector('.menu-toggle');
  var nav=document.querySelector('.primary-nav');
  var groups=Array.prototype.slice.call(document.querySelectorAll('.nav-group'));
  // Load one authoritative header treatment after page-specific stylesheets.
  var unifiedStyle=document.createElement('style');
  unifiedStyle.id='s4u-unified-navigation';
  unifiedStyle.textContent="\n/* Shared training navigation: consistent on all pages regardless of other page styles. */\nbody .site-header{position:fixed!important;inset:14px 0 auto!important;width:100%!important;height:auto!important;min-height:0!important;margin:0!important;padding:0!important;background:transparent!important;border:0!important;box-shadow:none!important;backdrop-filter:none!important;z-index:10000!important;pointer-events:none!important}\nbody .site-header .nav-card{box-sizing:border-box!important;display:flex!important;grid-template-columns:none!important;align-items:center!important;justify-content:space-between!important;width:min(1450px,calc(100% - 32px))!important;min-height:86px!important;height:86px!important;max-height:none!important;margin:0 auto!important;padding:0 22px!important;gap:18px!important;background:#10294b!important;border:1px solid rgba(221,235,250,.25)!important;border-radius:20px!important;box-shadow:0 14px 38px rgba(6,21,44,.27)!important;pointer-events:auto!important;overflow:visible!important}\nbody .site-header .brand{display:flex!important;align-items:center!important;justify-content:flex-start!important;flex:0 1 230px!important;min-width:0!important;margin:0!important;padding:0!important}\nbody .site-header .brand img,body .site-header .brand img.lms-logo{display:block!important;width:230px!important;max-width:100%!important;height:auto!important;max-height:55px!important;object-fit:contain!important;filter:none!important}\nbody .site-header .primary-nav{display:flex!important;position:static!important;flex:1 1 auto!important;align-items:center!important;justify-content:center!important;flex-direction:row!important;gap:2px!important;width:auto!important;min-width:0!important;margin:0!important;padding:0!important;background:transparent!important;border:0!important;box-shadow:none!important;overflow:visible!important;max-height:none!important}\nbody .site-header .primary-nav>.nav-link,body .site-header .primary-nav .nav-group>.nav-link{box-sizing:border-box!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;height:44px!important;min-height:44px!important;max-height:none!important;line-height:1.2!important;gap:6px!important;white-space:nowrap!important;padding:0 9px!important;border:0!important;border-radius:24px!important;background:transparent!important;color:#fff!important;font-size:13px!important;font-weight:700!important;text-decoration:none!important}\nbody .site-header .primary-nav>.nav-link:hover,body .site-header .primary-nav .nav-group>.nav-link:hover{color:#ffab72!important;background:rgba(255,255,255,.1)!important}\nbody .site-header .primary-nav .nav-group{position:relative!important;display:flex!important;align-items:center!important;flex-direction:row!important;height:auto!important;margin:0!important;padding:0!important}\nbody .site-header .nav-dropdown{position:absolute!important;top:calc(100% - 1px)!important;left:0!important;right:auto!important;min-width:230px!important;width:max-content!important;max-width:280px!important;margin:0!important;padding:9px!important;background:#fff!important;color:#10294b!important;border:1px solid #dce5ef!important;border-radius:12px!important;box-shadow:0 16px 38px rgba(9,25,51,.22)!important;z-index:10060!important;display:none!important;visibility:visible!important;opacity:1!important;transform:none!important;pointer-events:auto!important}\nbody .site-header .nav-group:hover>.nav-dropdown,body .site-header .nav-group:focus-within>.nav-dropdown,body .site-header .nav-group.open>.nav-dropdown{display:block!important}\nbody .site-header .nav-dropdown a{display:block!important;padding:11px 13px!important;color:#10294b!important;background:transparent!important;text-decoration:none!important;border-radius:8px!important;white-space:normal!important}\nbody .site-header .nav-dropdown a:hover{color:#e96509!important;background:#f4f7fb!important}\nbody .site-header .nav-actions{display:flex!important;align-items:center!important;flex:0 0 auto!important;gap:9px!important;margin:0!important}\nbody .site-header .nav-actions .btn{box-sizing:border-box!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:43px!important;height:43px!important;padding:0 16px!important;border-radius:999px!important;font-size:13px!important;font-weight:750!important;white-space:nowrap!important;text-decoration:none!important}\nbody .site-header .nav-actions .btn-secondary{background:transparent!important;color:#fff!important;border:1px solid rgba(255,255,255,.5)!important}\nbody .site-header .nav-actions .btn-primary{background:#ff7408!important;color:#fff!important;border:1px solid #ff7408!important}\nbody .site-header .menu-toggle{display:none!important}\nbody .site-header .nav-mobile-actions{display:none!important}\n@media (min-width:1081px) and (max-width:1350px){body .site-header .nav-card{gap:7px!important;padding:0 15px!important}body .site-header .brand{flex-basis:185px!important}body .site-header .brand img{width:185px!important}body .site-header .primary-nav>.nav-link,body .site-header .primary-nav .nav-group>.nav-link{font-size:11px!important;padding:0 6px!important}body .site-header .nav-actions .btn{padding:0 10px!important;font-size:12px!important}}\n@media (max-width:1080px){\n body .site-header{top:8px!important}\n body .site-header .nav-card{display:flex!important;grid-template-columns:none!important;width:calc(100% - 24px)!important;height:70px!important;min-height:70px!important;padding:0 15px!important;gap:10px!important;border-radius:15px!important}\n body .site-header .brand{flex:0 1 auto!important;margin-right:auto!important}\n body .site-header .brand img,body .site-header .brand img.lms-logo{width:205px!important;max-height:50px!important}\n body .site-header .menu-toggle{display:flex!important;align-items:center!important;justify-content:center!important;flex:0 0 44px!important;width:44px!important;height:44px!important;color:white!important;cursor:pointer!important}\n body .site-header .primary-nav{display:none!important;position:absolute!important;top:calc(100% + 9px)!important;left:auto!important;right:0!important;width:min(390px,calc(100vw - 24px))!important;max-height:calc(100dvh - 98px)!important;overflow-y:auto!important;flex-direction:column!important;align-items:stretch!important;justify-content:flex-start!important;gap:4px!important;padding:13px!important;background:#10294b!important;border:1px solid rgba(255,255,255,.25)!important;border-radius:15px!important;box-shadow:0 18px 36px rgba(6,21,44,.35)!important;z-index:10050!important}\n body .site-header .primary-nav.open{display:flex!important}\n body .site-header .primary-nav>.nav-link,body .site-header .primary-nav .nav-group>.nav-link{display:flex!important;justify-content:flex-start!important;width:100%!important;height:auto!important;min-height:46px!important;padding:12px 14px!important;font-size:14px!important}\n body .site-header .primary-nav .nav-group{display:flex!important;flex-direction:column!important;align-items:stretch!important;width:100%!important}\n body .site-header .primary-nav .nav-group>.nav-trigger{justify-content:space-between!important}\n body .site-header .nav-group>.nav-dropdown{display:none!important;position:static!important;top:auto!important;left:auto!important;right:auto!important;width:100%!important;max-width:none!important;min-width:0!important;margin:0!important;padding:0 0 5px 16px!important;background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important}\n body .site-header .nav-group:hover>.nav-dropdown,body .site-header .nav-group:focus-within>.nav-dropdown{display:none!important}\n body .site-header .nav-group.open>.nav-dropdown{display:block!important}\n body .site-header .nav-dropdown a{min-height:43px!important;padding:11px 12px!important;color:white!important}\n body .site-header .nav-dropdown a:hover{color:#ffab72!important;background:rgba(255,255,255,.08)!important}\n body .site-header .nav-actions{display:none!important}\n body .site-header .nav-mobile-actions{display:flex!important;flex-direction:column!important;gap:8px!important;margin-top:10px!important;padding-top:12px!important;border-top:1px solid rgba(255,255,255,.2)!important}\n body .site-header .nav-mobile-actions .btn{display:flex!important;align-items:center!important;justify-content:center!important;min-height:44px!important;width:100%!important;border-radius:100px!important;font-size:14px!important;text-decoration:none!important}\n body .site-header .nav-mobile-actions .btn-secondary{color:white!important;border:1px solid rgba(255,255,255,.45)!important;background:transparent!important}\n body .site-header .nav-mobile-actions .btn-primary{color:white!important;border:1px solid #ff7408!important;background:#ff7408!important}\n}\n@media (max-width:440px){body .site-header .brand img,body .site-header .brand img.lms-logo{width:170px!important}}\n";
  document.head.appendChild(unifiedStyle);
  var mobileActions=document.querySelector('.site-header .nav-actions');
  if(nav && mobileActions && !nav.querySelector('.nav-mobile-actions')){
    var mobileCopy=mobileActions.cloneNode(true);
    mobileCopy.className='nav-mobile-actions';
    nav.appendChild(mobileCopy);
  }

  function mobile(){return window.innerWidth<=1080;}
  function setGroup(group,open){
    group.classList.toggle('open',open);
    var trigger=group.querySelector('.nav-trigger');
    if(trigger)trigger.setAttribute('aria-expanded',open?'true':'false');
  }
  function closeGroups(except){groups.forEach(function(g){if(g!==except)setGroup(g,false);});}
  if(menuBtn&&nav){
    menuBtn.addEventListener('click',function(e){
      e.stopPropagation();
      var open=!nav.classList.contains('open');
      nav.classList.toggle('open',open);
      menuBtn.classList.toggle('open',open);
      menuBtn.setAttribute('aria-expanded',open?'true':'false');
      if(!open)closeGroups();
    });
  }
  groups.forEach(function(group){
    var trigger=group.querySelector('.nav-trigger');
    if(!trigger)return;
    trigger.addEventListener('click',function(e){
      e.preventDefault();
      e.stopPropagation();
      var open=!group.classList.contains('open');
      closeGroups(group);
      setGroup(group,open);
    });
  });
  document.addEventListener('click',function(e){
    if(!e.target.closest('.nav-card')){
      closeGroups();
      if(nav)nav.classList.remove('open');
      if(menuBtn){menuBtn.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');}
    }
  });
  window.addEventListener('resize',function(){
    if(!mobile()&&nav){
      nav.classList.remove('open');
      if(menuBtn){menuBtn.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');}
      closeGroups();
    }
  });
})();

/* Highlight the actual current page in header and footer navigation. */
(function () {
  function markActiveLinks() {
    var current = decodeURIComponent(window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('.site-header a[aria-current], #siteFooter a[aria-current], .site-header .nav-trigger[aria-current]').forEach(function (el) {
      el.removeAttribute('aria-current');
    });
    document.querySelectorAll('.site-header a[href], #siteFooter a[href]').forEach(function (link) {
      var url;
      try { url = new URL(link.getAttribute('href'), window.location.href); }
      catch (e) { return; }
      if (url.origin !== window.location.origin) return;
      var target = decodeURIComponent(url.pathname.split('/').pop() || 'index.html').toLowerCase();
      if (target !== current) return;
      link.setAttribute('aria-current', 'page');
      var group = link.closest('.site-header .nav-group');
      if (group) {
        var trigger = group.querySelector('.nav-trigger');
        if (trigger) trigger.setAttribute('aria-current', 'page');
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', markActiveLinks);
  } else {
    markActiveLinks();
  }
})();


/* Keep shared footer links aligned with the actual Screenings4u websites. */
(function () {
  function repairFamilyLinks() {
    document.querySelectorAll('.site-footer a[href]').forEach(function (link) {
      const label = (link.textContent || '').trim().toLowerCase();
      if (label === 'dot.screenings4u.com') {
        link.href = 'https://dot.screenings4u.com/';
      } else if (label === 'non.dot.screenings4u.com') {
        link.textContent = 'workforce.screenings4u.com';
        link.href = 'https://workforce.screenings4u.com/';
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', repairFamilyLinks);
  } else {
    repairFamilyLinks();
  }
})();
