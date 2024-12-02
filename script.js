// Hamburger Menüsü için Bootstrap'in kendi JavaScript'i zaten yükleniyor (Bootstrap Bundle). Bu sebeple, ekstra bir şey eklememiz gerekmiyor.

// Slayt Gösterisi için JavaScript
let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow img");

// Slaytları otomatik olarak geçirme fonksiyonu
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 4000); // 4 saniye sonra slaytı değiştir
}

// Sayfa yüklendiğinde slayt gösterisini başlat
window.onload = function () {
  showSlides();
};
