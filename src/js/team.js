const slides = document.querySelector('.team__items');
const slideCount = document.querySelectorAll('.team__item').length;
let index = 0;

document.querySelector('.team__next').onclick = () => {
    index = (index + 1) % slideCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
};

document.querySelector('.team__prev').onclick = () => {
    index = (index - 1 + slideCount) % slideCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
};