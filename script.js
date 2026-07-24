(() => {
  const links = [...document.querySelectorAll('.toc a')];
  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const link = document.querySelector(`.toc a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting && link) {
        links.forEach(item => item.removeAttribute('aria-current'));
        link.setAttribute('aria-current', 'true');
      }
    });
  }, { rootMargin: '-18% 0px -68% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
})();
