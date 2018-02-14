var counter = 0;
const board = document.getElementById('board');
const startscene = document.getElementById('start');
const startbutton = document.querySelector('div#start a');

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

const box = document.querySelectorAll('li.box');
const boxes = document.querySelector('ul.boxes');

const finish = document.getElementById('finish');
const winner = document.querySelector('#finish header p');
player1.className += ' active';
startbutton.onclick = Starting

function DisplayScene(see, no1, no2) {
    see.style = 'block';
    no1.style.display = 'none';
    no2.style.display = 'none';

}

function Starting() {
    DisplayScene(board, startscene, finish);
};

document.addEventListener("DOMContentLoaded", function () {
    DisplayScene(startscene, board, finish);
});

boxes.addEventListener('mouseover', function (event) {

    if (!event.target.classList.contains('selected')) {
        if (player1.className === 'players active')
            event.target.style.backgroundImage = "url('img/o.svg')";
        if (player2.className === 'players active')
            event.target.style.backgroundImage = "url('img/x.svg')";
    }
});
boxes.addEventListener('mouseout', function (event) {
    event.target.style.backgroundImage = "";
});
boxes.addEventListener('click', function (event) {
    if (counter === 8) {
        DisplayScene(finish, board, startscene);
        finish.className += ' screen-win-tie';
        winner.textContent = 'its a tie';
        counter = 0;
    }
    if (!event.target.classList.contains('selected')) {
        counter += 1;
        if (player1.className === 'players active') {
            event.target.className += " box-filled-1 selected";
            player2.className += ' active';
            player1.className = 'players'

        } else {
            player1.className += ' active';
            player2.className = 'players'
            event.target.className += " box-filled-2 selected";
        }
    }
});
