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
const newgame = document.querySelector('#finish .button');

const winnerCalc = [[0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]];
let o = [];
let x = [];
DisplayScene(startscene, board, finish);


player1.className += ' active';


startbutton.addEventListener('click', function(){
    DisplayScene(board, startscene, finish);
});
newgame.addEventListener('click', function(){
    DisplayScene(board, startscene, finish);
    box.forEach(function (box1){
       box1.className = 'box'; 
    });
    o = [];
    x = [];
    counter = 0;
});

function DisplayScene(see, no1, no2) {
    see.style = 'block';
    no1.style.display = 'none';
    no2.style.display = 'none';
}





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
        winner.textContent = "It's a Tie!";
        counter = 0;
    }
    if (!event.target.classList.contains('selected')) {
        counter += 1;
        if (player1.className === 'players active') {
            o.push(event.target.id.replace('box', ''));
            o.sort();
            CompareArray(o, 'o');
            event.target.className += " box-filled-1 selected";
            player2.className += ' active';
            player1.className = 'players'

        } else {
            x.push(event.target.id.replace('box', ''));
            x.sort();
            CompareArray(x, 'x');
            event.target.className += " box-filled-2 selected";
            player1.className += ' active';
            player2.className = 'players'
        }
    }
});

function CompareArray(XorO, string) {
    winnerCalc.forEach(function (arr) {
        var e = 0;
        XorO.forEach(function (number) {
           arr.forEach(function(arrnum){
                if (number == arrnum) {
                e++;
                console.log(e);
                    if(e === 3){
                        winner.textContent = 'Winner';
                        if(string == 'x')
                            finish.className += ' screen-win-two';
                        else
                            finish.className += ' screen-win-one';
                        DisplayScene(finish, board, startscene);

                    }
                }
           });
        });
    });
}
