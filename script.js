const gigs = document.querySelectorAll('.gig');

/* remove old gigs */

const today = new Date();
today.setHours(0, 0, 0, 0);

gigs.forEach((gig) => {

  const gigDate = new Date(gig.dataset.date);
  gigDate.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() - 1);

  if (gigDate < tomorrow) {
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
