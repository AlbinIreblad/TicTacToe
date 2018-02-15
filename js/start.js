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
//all the posible winning methods
const winnerCalc = [[0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]];
//made 2 difrent arrays for o and x and add the plasement they are in
let o = [];
let x = [];
DisplayScene(startscene, board, finish);

//making player 1 start first round
player1.className += ' active';

//start button pressed
startbutton.addEventListener('click', function(){
    DisplayScene(board, startscene, finish);
});
//when pressed newgame button everything is restored
newgame.addEventListener('click', function(){
    DisplayScene(board, startscene, finish);
    box.forEach(function (box1){
       box1.className = 'box'; 
    });
    o = [];
    x = [];
    counter = 0;
});
//display scene as a method to save space
function DisplayScene(see, no1, no2) {
    see.style = 'block';
    no1.style.display = 'none';
    no2.style.display = 'none';
}




//making when hovering the x or o apere and disapear with mouse over and mouseout
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
//when someone click on any box
boxes.addEventListener('click', function (event) {
    if (counter === 8) {
        DisplayScene(finish, board, startscene);
        finish.className += ' screen-win-tie';
        winner.textContent = "It's a Tie!";
        counter = 0;
        //i use a counter and if the user has clicked the box 9 times the game is a tie
    }
    if (!event.target.classList.contains('selected')) {
        //counter only goes up 1 if user presses a unpressed box
        counter += 1;
        if (player1.className === 'players active') {
            o.push(event.target.id.replace('box', ''));
            o.sort();
            CompareArray(o, 'o');
            event.target.className += " box-filled-1 selected";
            player2.className += ' active';
            player1.className = 'players'
            //getting corect classes and everything
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
//Here is where i compare the x or o player to the posible winning combinations
function CompareArray(XorO, string) {
    winnerCalc.forEach(function (arr) {
        //first loop thrue every combination
        var e = 0;
        //use a counter
        XorO.forEach(function (number) {
            //loop thrue every players nu,ber then the combination number
           arr.forEach(function(arrnum){
                if (number == arrnum) {
                e++;
                    //counter gets a + 1 if it is able to get to 3 means that we have a winner
                console.log(e);
                    if(e === 3){
                        //displaying the winner
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
