const calcInputFirstEl = document.querySelector('.calculator__input-first');
const calcInputSecondEl = document.querySelector('.calculator__input-second');

const calcButtonEls = document.querySelectorAll('.calculator__plus, .calculator__minus, .calculator__multiply, .calculator__divide');

// const calcPlusEl = document.querySelector('.calculator__plus');
// const calcMultiplyEl = document.querySelector('.calculator__multiply');
// const calcMinusEl = document.querySelector('.calculator__minus');
// const calcDivideEl = document.querySelector('.calculator__divide');

const calcEqualEl = document.querySelector('.calculator__equal');

const calcResultEl = document.querySelector('.calculator__result-num');

const calcTextEl = document.querySelector('.calculator__text');

let calcSymbols = null;

// calcPlusEl.addEventListener('click', () => {
//     calcSymbols = '+'
// });
// calcMultiplyEl.addEventListener('click', () => {
//     calcSymbols = '*'
// });
// calcMinusEl.addEventListener('click', () => {
//     calcSymbols = '-'
// });
// calcDivideEl.addEventListener('click', () => {
//     calcSymbols = '/'
// });

calcButtonEls.forEach(item => {
    item.addEventListener('click', (event) => {
        calcButtonEls.forEach(eventTwo => eventTwo.classList.remove('calculator__btn-active'));
        event.currentTarget.classList.add('calculator__btn-active');
        calcSymbols = event.currentTarget.textContent;
    });
});

calcEqualEl.addEventListener('click', () => {
    calcResultEl.style.color = '';
    calcButtonEls.forEach(b => b.classList.remove('calculator__btn-active'));
    const calcNumOne = parseFloat(calcInputFirstEl.value);
    const calcNumTwo = parseFloat(calcInputSecondEl.value);
    calcTextEl.textContent = '';

    if (isNaN(calcNumOne) || isNaN(calcNumTwo)) {
        calcTextEl.textContent = 'Введіть число!';
        return;
    }

    let calcResult;
    switch (calcSymbols) {
        case '+':
            calcResult = calcNumOne + calcNumTwo;
            break;
        case '*':
            calcResult = calcNumOne * calcNumTwo;
            break;
        case '-':
            calcResult = calcNumOne - calcNumTwo;
            break;
        case '/':
            if (calcNumTwo === 0) {
                // calcResultEl.classList.add('.calculator__result-num-error');
                calcResultEl.style.color = '#900';
                calcTextEl.textContent = 'На нуль ділити не можна!';
                calcResultEl.textContent = `!`;
                return;
            }
            calcResult = calcNumOne / calcNumTwo;
            break;
        default:
            calcTextEl.textContent = 'Виберіть оператор!';
            return;
    }

    calcResultEl.textContent = `${calcResult}`;
});