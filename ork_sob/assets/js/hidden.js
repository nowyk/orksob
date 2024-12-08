document.addEventListener("DOMContentLoaded", () => {
    const elementsToShow = document.querySelectorAll(".hidden, .from-left, .from-right");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show", "appear");
        }
      });
    }, { threshold: 0.1 });
  
    elementsToShow.forEach((el) => observer.observe(el));
  });
  