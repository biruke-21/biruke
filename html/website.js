function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
  document.querySelectorAll('nav a').forEach(nav => nav.classList.remove('active'));
  document.getElementById('nav-' + sectionId).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}

function sendMessage(event) {
  event.preventDefault();
  document.getElementById('contact-success').style.display = 'block';
  setTimeout(() => {
    document.getElementById('contact-success').style.display = 'none';
    document.querySelector('.contact-form').reset();
  }, 2200);
}