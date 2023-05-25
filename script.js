document.addEventListener('DOMContentLoaded', () =>
  document.querySelectorAll('a[href^="#"]').forEach(link =>
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      const animateScroll = (t = performance.now(), distance = target.offsetTop - pageYOffset) => {
        scrollTo(0, pageYOffset + distance * ((t - startTime) / 1000) ** 2);
        if (pageYOffset !== target.offsetTop && t - startTime < 1000) requestAnimationFrame(animateScroll);
      };
      const startTime = performance.now();
      requestAnimationFrame(animateScroll);
    })
  )
);