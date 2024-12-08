  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Pozycja przewijania
    const image = document.querySelector('.combined-image');
    
    // Przemieszczamy obraz w pionie w zależności od pozycji przewijania
    image.style.transform = `translateY(-${scrollPosition * 0.5}px)`; // Dopasuj prędkość
  });
  