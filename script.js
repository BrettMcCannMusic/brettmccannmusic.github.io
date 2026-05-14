const gigs = document.querySelectorAll('.gig');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }

  });
}, {
  threshold: 0.1
});

gigs.forEach((gig) => {
  observer.observe(gig);
});
