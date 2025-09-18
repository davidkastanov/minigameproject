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
const exerWarnEl = document.querySelector('.exerises__warn');


const exerCreateItems = (array) => {
    exerItemsEl.innerHTML = array.map(({ name, surname, born, dead }) => `
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
        exerWarnEl.classList.add('black')
        exerWarnEl.textContent = '';
        const action = event.currentTarget.dataset.action;
        switch (action) {
            case 'born-19-st':
                const bornIn19St = scientists.filter(s => s.born >= 1800 && s.born <= 1900);
                exerCreateItems(bornIn19St);
                break;
            case 'born-albert':
                const albert = scientists.find(albert => albert);
                exerWarnEl.classList.add('green');
                exerWarnEl.textContent = `${albert.name} ${albert.surname} народився у ${albert.born} році`;
                exerCreateItems(scientists);
                break;
            case 'alphabet':
                const alphabet = [...scientists].sort((a, b) => a.name.localeCompare(b.name));
                exerCreateItems(alphabet);
                break;
            case 'surname-first-c':
                const surnameFirstC = scientists.filter(s => s.surname.toUpperCase().startsWith('C'))
                exerCreateItems(surnameFirstC);
                break;
            case 'born-dead-years':
                const bornDeadYears = [...scientists].sort((a, b) => {
                    const lifeA = a.dead - a.born;
                    const lifeB = b.dead - b.born;
                    return lifeA - lifeB;
                });
                exerCreateItems(bornDeadYears);
                break;
            case 'name-first-a':
                const nameFirstA = scientists.filter(s => s.name.toUpperCase().startsWith('A'))
                exerCreateItems(nameFirstA);
                break;
            case 'dead-last':
                const deadLast = scientists.reduce((a, b) => {
                    if (a.born > b.born) {
                        return a;
                    } else {
                        return b;
                    }
                }, 0);
                exerCreateItems([deadLast]);
                break;
            case 'born-dead-short-long':
                const bornShort = scientists.reduce((a, b) => {
                    if ((a.dead - a.born) < (b.dead - b.born)) {
                        return a;
                    } else {
                        return b;
                    }


                });
                const deadLong = scientists.reduce((a, b) => {
                    if ((a.dead - a.born) > (b.dead - b.born)) {
                        return a;
                    } else {
                        return b;
                    }
                });
                exerCreateItems([bornShort, deadLong]);
                break;
            case 'first-name-surname':
                const firstNameSurname = scientists.filter((a) => a.name.trim().charAt(0).toUpperCase() === a.surname.trim().charAt(0).toUpperCase());
                exerCreateItems(firstNameSurname);
                break;
            case 'worked-exerises-19-st':
                const workedExerises19St = scientists.every(s => s.born + 18 >= 1800 && s.born <= 1900);
                exerCreateItems(scientists);
                if (workedExerises19St) {
                    exerWarnEl.classList.add('green');
                    exerWarnEl.textContent = `Всі працювали!`;
                    break;
                } else {
                    exerWarnEl.classList.add('red');
                    exerWarnEl.textContent = `Не всі працювали.`;
                }
                break;
            case 'sum-ages':
                const sumAges = scientists.reduce((totalBorn, s) => totalBorn + s.dead - s.born, 0);
                exerWarnEl.classList.add('green');
                exerWarnEl.textContent = `Сума років усіх вчених - ${sumAges}`;
                exerCreateItems(sumAges)
                break;
            case 'remove-born-15-17':
                const removeBorn15St17St = scientists.filter(s => s.born < 1400 || s.born > 1700);
                exerCreateItems(removeBorn15St17St);
                break;
        }
    })
})


exerCreateItems(scientists);