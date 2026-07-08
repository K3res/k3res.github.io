const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form && status) {
  form.addEventListener('submit', async function (event) {
    event.preventDefault();


    status.textContent = 'Sending...';
    status.classList.remove('hidden', 'text-green-600');
    status.classList.add('text-amber-500');

    try {
    
      const formData = new FormData(form);
      
   
      if (formData.get('_gotcha')) {
        throw new Error('Bot detected');
      }

      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        status.textContent = 'Thank you! Your message has been sent.';
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      status.textContent = 'Something went wrong. Please try again.';
      status.classList.remove('text-amber-500');
      status.classList.add('text-red-600');
    }

  
    clearTimeout(window.statusTimeout);
    window.statusTimeout = setTimeout(function () {
      status.classList.add('hidden');
      status.textContent = '';
      status.classList.remove('text-amber-500', 'text-red-600');
    }, 5000);
  });
}
