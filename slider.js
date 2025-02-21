let currentSlide = 0;
const slides = document.querySelectorAll('.custom-slide');
const slider = document.querySelector('.custom-slider');

function changeSlide() {
    slider.style.transform = `translateX(-${currentSlide * 300}px)`; // 300px = ширина одного слайда
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    changeSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide();
}

// Перетаскивание слайдов мышью
let isDragging = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDragging = false;
});

slider.addEventListener('mouseup', () => {
    isDragging = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // скорость прокрутки
    slider.scrollLeft = scrollLeft - walk;
});

changeSlide();
