const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form && status) {
  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Status beim Starten: Gold
    status.textContent = 'Sending...';
    status.classList.remove('hidden');
    status.classList.remove('text-red-600');
    status.classList.add('text-amber-800');

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
      // Fehlerfall bleibt rot, damit der Nutzer den Unterschied sieht
      status.textContent = 'There was an error. Please try again.';
      status.classList.remove('text-amber-800');
      status.classList.add('text-red-600');
    }

    clearTimeout(window.statusTimeout);
    window.statusTimeout = setTimeout(function () {
      status.classList.add('hidden');
      status.textContent = '';
      // Gold-Klasse für den nächsten Durchlauf sicherheitshalber entfernen
      status.classList.remove('text-amber-800');
    }, 5000);
  });
}
