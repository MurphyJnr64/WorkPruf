document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const toggle = document.getElementById('togglePassword');
  const resetLink = document.getElementById('resetPassword');
  const errorMsg = document.getElementById('errorMsg');
  const successMsg = document.getElementById('successMsg');

  toggle.addEventListener('click',()=>{
    const t = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', t);
    toggle.textContent = t === 'password' ? 'Show' : 'Hide';
  });

  resetLink.addEventListener('click',function(e){
    e.preventDefault();
    const em = email.value.trim();
    if(!em){ return showError('Enter your email first to reset password'); }
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){ return showError('Enter a valid email to reset password'); }
    // Demo: show success message. Replace with real reset logic.
    showSuccess('Password reset email sent (to your inbox)');
  });

  function showError(msg){
    errorMsg.hidden = false; successMsg.hidden = true; errorMsg.textContent = msg;
  }

  function showSuccess(msg){
    successMsg.hidden = false; errorMsg.hidden = true; successMsg.textContent = msg;
  }

  form.addEventListener('submit',function(e){
    e.preventDefault();
    const em = email.value.trim();
    const pw = password.value;
    if(!em){ return showError('Email is required'); }
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){ return showError('Enter a valid email'); }
    if(!pw || pw.length < 8){ return showError('Password must be at least 8 characters'); }

    // Demo: client-side only. Replace with real backend integration.
    showSuccess('Signed in (Successfully) - Open dashboard.html to continue');
    // For integration: send `em` and `pw` to your auth endpoint via fetch()
  });
});
