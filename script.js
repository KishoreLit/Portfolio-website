const sections = document.querySelectorAll("section");
    const options = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);
    sections.forEach(section => {
      section.classList.add("hidden");
      observer.observe(section);
    });
    const buttons = document.querySelectorAll(".btn-primary, .btn-outline");
buttons.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.boxShadow = "0 0 12px #b3e5fc";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.boxShadow = "none";
  });
});
// Project Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    projectCards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

  
