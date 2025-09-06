const teamSlides = document.querySelector('.team__items');
const teamSlideCount = document.querySelectorAll('.team__item').length;
const teamUnderBoxEls = document.querySelectorAll('.team__under-box')

teamUnderBoxEls[0].classList.add('team__under-box-active');
function updateSlider() {
    teamSlides.style.transform = `translateX(-${index * 100}%)`;
    teamUnderBoxEls.forEach(item => item.classList.remove('team__under-box-active'));
    teamUnderBoxEls[index].classList.add('team__under-box-active');
}

let index = 0;

document.querySelector('.team__next').onclick = () => {
    console.log(teamUnderBoxEls);
    index = (index + 1) % teamSlideCount;
    updateSlider();
};

document.querySelector('.team__prev').onclick = () => {
    index = (index - 1 + teamSlideCount) % teamSlideCount;
    updateSlider();
};

teamUnderBoxEls.forEach((item, idx) => {
  item.addEventListener('click', () => {
    index = idx;
    updateSlider();
  });
});