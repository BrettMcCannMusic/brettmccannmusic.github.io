const gigs = document.querySelectorAll('.gig');

/* remove old gigs */

const today = new Date();

gigs.forEach((gig) => {

  const gigDate = new Date(gig.dataset.date);

  if (gigDate < today) {
    gig.remove();
  }

});

/* scroll reveal */

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }

  });

}, {
  threshold: 0.15
});

gigs.forEach((gig) => {
  observer.observe(gig);
});
