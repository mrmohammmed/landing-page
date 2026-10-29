document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hero-search')?.addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  });
});
