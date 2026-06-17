const gigs = document.querySelectorAll('.gig');
const gigsSection = document.querySelector('.gigs-section');

/* sort gigs by date */

const sortedGigs = Array.from(gigs).sort((a, b) => {
  return new Date(a.dataset.date) - new Date(b.dataset.date);
});

/* put them back in sorted order */

sortedGigs.forEach(gig => {
  gigsSection.appendChild(gig);
});

/* remove old gigs */

const today = new Date();
today.setHours(0, 0, 0, 0);

sortedGigs.forEach((gig) => {

  const gigDate = new Date(gig.dataset.date);
  gigDate.setHours(0, 0, 0, 0);

  /* remove after gig day finishes */

  gigDate.setDate(gigDate.getDate() + 1);

  if (gigDate <= today) {
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

sortedGigs.forEach((gig) => {
  observer.observe(gig);
});
