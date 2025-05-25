// Smooth scroll to sections
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Tab switch for service categories
function showCategory(category) {
  const categories = document.querySelectorAll('.services-category');
  const buttons = document.querySelectorAll('.tab-button');

  categories.forEach(cat => cat.classList.add('hidden'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(category).classList.remove('hidden');
  event.target.classList.add('active');
}

// Welcome screen removal
window.addEventListener('load', () => {
  const welcomeScreen = document.getElementById('welcome-screen');
  if (welcomeScreen) {
    setTimeout(() => {
      welcomeScreen.remove();
    }, 3000);
  }
});

// Call & WhatsApp popup functionality
document.addEventListener("DOMContentLoaded", function () {
  const callButton = document.getElementById('callButton');
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('closePopupBtn');
  const copyBtn = document.getElementById('copyBtn');
  const phoneNumber = document.getElementById('phoneNumber');

  if (callButton && popup && closeBtn && copyBtn && phoneNumber) {
    callButton.addEventListener('click', function () {
      popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
      popup.style.display = 'none';
    });

    copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(phoneNumber.innerText.trim())
        .then(() => {
          alert("Phone number copied to clipboard!");
        })
        .catch(err => {
          console.error("Failed to copy: ", err);
        });
    });
  }
});
