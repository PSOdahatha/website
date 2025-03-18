let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

document.querySelector('.next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

const scrollContainer = document.getElementById('timeline');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

scrollRightBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});

scrollLeftBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});