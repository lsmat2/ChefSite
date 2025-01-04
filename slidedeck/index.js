let currentSlide = 0;
const images = document.querySelectorAll('.carousel-image');
const dotsContainer = document.querySelector('.carousel-dots');

function initCarousel() {
  images[currentSlide].style.display = 'block';
  images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('carousel-dot');
    dot.onclick = () => changeSlide(i - currentSlide);
    dotsContainer.appendChild(dot);
  });
  updateDots();
}

function changeSlide(n) {
  images[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + n + images.length) % images.length;
  images[currentSlide].style.display = 'block';
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll('.carousel-dot');
  dots.forEach(dot => dot.style.backgroundColor = '#bbb');
  dots[currentSlide].style.backgroundColor = '#717171';
}

window.onload = initCarousel;
