const formEl = document.querySelector('.random__form')
const inputEl = document.querySelector('.random__input')
const textEl = document.querySelector('.random__result')

const random = Math.floor(Math.random() * (10 - 1) + 1)
console.log(random);



formEl.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const num = parseInt(inputEl.value.trim());
    console.log(num);

    if (num === random) {
      textEl.textContent = `Вітаю, ви вгадали число! (${random})`;
      textEl.style.color = '#039900';
    } else {
        textEl.textContent = `Ви програли, компютер загадав (${random})`;
        textEl.style.color = '#900';
    }
})


