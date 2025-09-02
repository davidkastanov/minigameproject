const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeModalBtn');

// закриваємо по кліку на хрестик
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// закриваємо по кліку на фон
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

