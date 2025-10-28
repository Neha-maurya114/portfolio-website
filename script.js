// Add a smooth scroll effect for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});

// Optional: Add a small animation effect on scroll
const reveals = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < trigger) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});
