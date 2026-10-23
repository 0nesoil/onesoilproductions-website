const t=document.querySelector('.menu-toggle'),n=document.querySelector('.nav');if(t&&n)t.addEventListener('click',()=>n.classList.toggle('open'));document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();

(function(){
  var S=window.SITE||{},L=S.links||{},N=S.newsletter||{};
  document.querySelectorAll('[data-store]').forEach(function(a){
    var u=L[a.getAttribute('data-store')];
    if(u){a.href=u;a.target='_blank';a.rel='noopener';}
    else{a.classList.add('soon');a.setAttribute('aria-disabled','true');a.removeAttribute('href');
      var s=a.querySelector('span');if(s)s.textContent='Soon';}
  });
  var f=document.getElementById('signup'),note=document.getElementById('signup-note');
  if(f){
    var email=f.querySelector('input[type=email]');
    if(N.action){f.action=N.action;f.method='post';f.target='_blank';email.name=N.emailField||'email';}
    f.addEventListener('submit',function(e){
      var v=(email.value||'').trim();
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){e.preventDefault();note.textContent='Please enter a valid email address.';email.focus();return;}
      if(N.action){note.textContent='Thank you. Check your inbox to confirm your subscription.';return;}
      e.preventDefault();
      if(N.link){window.open(N.link,'_blank','noopener');note.textContent='Opening the sign-up page.';}
      else{note.textContent='Sign-ups are opening soon. Please check back shortly.';}
    });
  }
})();
