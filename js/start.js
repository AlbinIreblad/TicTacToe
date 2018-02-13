const start = document.getElementById('board');
const startscene = document.getElementById('start');
const startbutton = document.querySelector('div#start a');

startbutton.onclick = Starting

console.log(startbutton);
startbutton.addEventListener("click", Starting);
function Starting(){
    console.log('HEJSAN');

};

document.addEventListener("DOMContentLoaded", => (){
    start.style.display = 'none';
    startscene.style.display = 'block';
});
