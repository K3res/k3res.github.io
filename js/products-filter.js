document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const freeTools = document.getElementById('free-tools-section');
  const productsSection = document.getElementById('products-section');
  const productsHeader = document.getElementById('products-header');
  const cvssPro = document.getElementById('cvss-pro-card');
  const comingSoon = document.getElementById('coming-soon-section');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      [freeTools, productsSection, productsHeader, cvssPro, comingSoon]
        .filter(Boolean)
        .forEach((el) => el.classList.remove('hidden'));

      if (category === 'cyber-risk') {
        comingSoon.classList.add('hidden');
      } else if (category === 'offensive-security') {
        freeTools.classList.add('hidden');
        cvssPro.classList.add('hidden');
        productsSection.classList.add('hidden');
      } else if (['smart-learning', 'gaming-labs', 'smart-utilities'].includes(category)) {
        freeTools.classList.add('hidden');
        productsSection.classList.add('hidden');
      }
    });
  });
});
