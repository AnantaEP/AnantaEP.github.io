// Smooth scroll to sections
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Handle form submit
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  // This is just a demo alert, no backend email sending
  alert(`Thank you, ${name}! Your message has been received. We will contact you soon.`);

  // Reset form
  form.reset();
});
