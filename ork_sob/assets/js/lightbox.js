// Pobranie elementów
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Dodanie obsługi kliknięcia na wszystkie linki
document.querySelectorAll(".image.fit").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Blokowanie domyślnej akcji linku
        const imgSrc = link.getAttribute("data-full");
        lightboxImg.src = imgSrc;
        lightbox.classList.add("show");
    });
});

// Zamknięcie lightboxa po kliknięciu gdziekolwiek na ekranie
function closeLightbox() {
    lightbox.classList.remove("show");
}
