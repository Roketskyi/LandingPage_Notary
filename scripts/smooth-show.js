var targets = document.querySelectorAll('.box');
var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.7 });

targets.forEach(function (target) {
  observer.observe(target);
});
