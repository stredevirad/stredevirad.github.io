// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize EmailJS once with your public key
(function() {
  emailjs.init("sAdh56juqLUp6MY4v");
})();

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_0orgni6', 'template_vxfadme', this)
    .then(() => {
      status.textContent = 'Thank you for your message! I will get back to you soon.';
      status.style.color = '#00bcd4';
      form.reset();
    }, (error) => {
      status.textContent = 'Oops! Something went wrong. Please try again.';
      status.style.color = 'red';
      console.error('EmailJS error:', error);
    });
});