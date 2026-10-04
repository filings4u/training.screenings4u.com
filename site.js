(function(){
  'use strict';
  var menuBtn=document.querySelector('.menu-toggle');
  var nav=document.querySelector('.primary-nav');
  var groups=Array.prototype.slice.call(document.querySelectorAll('.nav-group'));
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
      if(!mobile())return;
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
