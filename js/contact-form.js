const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form && status) {
  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    status.textContent = 'Sending...';
    status.classList.remove('hidden');
    status.classList.remove('text-red-600');
    status.classList.add('text-amber-500');

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        status.textContent = 'Thank you! Your message has been sent.';
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      status.textContent = 'There was an error. Please try again.';
      status.classList.remove('text-amber-500');
      status.classList.add('text-red-600');
    }

    clearTimeout(window.statusTimeout);
    window.statusTimeout = setTimeout(function () {
      status.classList.add('hidden');
      status.textContent = '';
      status.classList.remove('text-amber-500');
    }, 5000);
  });
}
