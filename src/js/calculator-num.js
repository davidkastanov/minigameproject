const inputEl = document.querySelector('.time__input');
const formEl = document.querySelector('.time__form');
const btnEl = document.querySelector('.time__button');
const textEl = document.querySelector('.time__amount');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const minuts = parseInt(inputEl.value.trim());

  const days = Math.floor(minuts / (24 * 60));
  const hours = Math.floor(minuts / (24 * 60) / 60);
  const mins = minuts % 60;

  textEl.textContent = `${days}дн. ${hours}год.:${mins}хв.`;
});
