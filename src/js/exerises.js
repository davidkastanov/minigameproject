const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];

const exerItemsEl = document.querySelector('.exerises__items');
const exerButtonsEls = document.querySelectorAll('.exerises__question-button');

const exerCreateItems = (array) => {
    exerItemsEl.innerHTML = array.map(({name, surname, born, dead}) => `
            <li class="exerises__item">
                <h3 class="exerises__item-name">${name}</h3>
                <h4 class="exerises__item-surname">${surname}</h4>
                <p class="exerises__item-born">born: ${born}</p>
                <p class="exerises__item-dead">dead: ${dead}</p>
            </li>
            `).join('');
};

exerButtonsEls.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const action = event.currentTarget.dataset.action;
        switch (action) {
            case 'born-19-st':
                const bornIn19St = scientists.filter(s => s.born >= 1800 && s.born <= 1900);
                exerCreateItems(bornIn19St);
                break;
            case 'born-albert':

                break;
            case 'alphabet':

                break;
            case 'surname-first-c':

                break;
            case 'born-dead-years':

                break;
            case 'name-first-a':

                break;
            case 'dead-last':

                break;
            case 'born-dead-short-long':

                break;
            case 'first-name-surname':

                break;
            case 'worked-exerises-19-st':
                const workedExerises19St = scientists.every(s => s.born + 18 >= 1800 && s.born <= 1900);
                if (workedExerises19St) {
                    alert('Всі працювали!');
                } else {
                    alert('Не всі працювали.');
                }
                break;
//            отримати масив вчених що народилися в 19 ст
// знайти суму років скільки прожили всі вченні
//            Відсортувати вчених по алфавіту
//            Відсортувати вчених по кількості прожитих років
// Видалити з масива вчених що народилися в 15 або 16 або 17 столітті
//             Знайти вченого який народився найпізніше.
//             Знайти рік народження Albert Einstein
//             знайти вчених прізвище яких починається на літеру С
//             Видалити з масива всіх вчених імя яких починається на A
//             Знайти вченого який прожив найбільше і вченого який прожив найменьше
// Знатйи вчених в яких співпадають перші літери імені і прізвища
//             Дізнатися чи всі вченні працювали в 19 столітті
        }
    })
})

exerCreateItems(scientists);