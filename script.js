let order = [];
let clickedOrder = [];
let score = 0;

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

const songColor = document.getElementById('songColor')

let shuffOrder = ( ) => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        songColor.play()
        songColor.currentTime = 0.1
        lightColor(elementColor, Number(i)+1);
    }
}

let lightColor =  (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 200);
    setTimeout( () => {
        element.classList.remove('selected');
    } , number)
}

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou!\n Iniciando próximo nível!`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout( () => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    })
}

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    } 
}

let nextLevel = () => {
    score++;
    shuffOrder()
}

let gameOver = () => {
    alert(`Pontuação ${score}\n Você perdeu!\n continuar?`)
    order = [];
    clickedOrder = [];
    playGame();
}

let playGame = () => {
    alert(`Vamos Jogar Genius?`);
    score = 0;
    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();