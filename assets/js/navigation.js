(function(){
  'use strict';
  function render(){
    const host=document.getElementById('trainingSiteHeader');
    if(!host) return;
    host.innerHTML=`
      <div class="training-header-inner">
        <a class="training-brand" href="index.html" aria-label="screenings4u Training home"><img src="images/training-logo.png" alt="screenings4u Learning Center"></a>
        <nav class="training-header-nav" id="trainingPrimaryNav" aria-label="Training navigation">
          <a href="dot-specimen-collector-training.html">Collector</a>
          <a href="der-training.html">DER</a>
          <a href="supervisor-training.html">Supervisor</a>
          <a href="employee-training.html">Employee</a>
          <a href="hazmat-training.html">HazMat</a>
          <a href="group-training.html">Group Training</a>
          <a href="collector-training-supplies.html">Supplies</a>
        </nav>
        <div class="training-header-actions">
          <a class="training-login-link" href="https://lms.screenings4u.com/training-login.html">Student Login</a>
          <a class="training-button training-button-primary" href="index.html#training">View Training</a>
        </div>
        <button class="training-mobile-toggle" type="button" aria-controls="trainingPrimaryNav" aria-expanded="false" aria-label="Open training navigation"><span></span></button>
      </div>`;
    const btn=host.querySelector('.training-mobile-toggle');
    btn?.addEventListener('click',()=>{
      const open=host.classList.toggle('training-mobile-open');
      btn.setAttribute('aria-expanded',String(open));
      btn.setAttribute('aria-label',open?'Close training navigation':'Open training navigation');
    });
    host.querySelectorAll('.training-header-nav a').forEach(a=>a.addEventListener('click',()=>host.classList.remove('training-mobile-open')));
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',render); else render();
})();
