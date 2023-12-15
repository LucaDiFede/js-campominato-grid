const startButton = document.getElementById('start-button');
console.log('startButton', startButton, typeof startButton);

const gridContainer = document.querySelector('.grid-container');
const contatore = document.querySelector('.Punteggio');

const bombList = [];

const totalcell = 100;

startButton.addEventListener('click', function () {



for (let i = 1; i <= totalcell; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerHTML = i;

    cell.addEventListener('click', function () {

        if(bombList.includes(i)) {
            cell.classList.add('bomb')
        } else {
            cell.classList.add('cell-cliccata')
        }
    });

    gridContainer.appendChild(cell);
};


});