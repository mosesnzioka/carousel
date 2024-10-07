let slideIndex = 0;
const slides = document.querySelectorAll(".card-item");
const totalSlides = slides.length;

function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });
}

function moveSlide(n) {
  slideIndex += n;

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }

  showSlides();
}

showSlides();

const autoSlideInterval = setInterval(() => {
  moveSlide(1);
}, 3000);

document.querySelector(".prev-item").addEventListener("click", () => {
  moveSlide(-1);
});

document.querySelector(".next-item").addEventListener("click", () => {
  moveSlide(1);
});
