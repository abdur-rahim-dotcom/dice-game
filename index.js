
const number1 = Math.floor(Math.random() * 6 + 1);
const randomDiceImage = 'images/dice' + number1 + '.png'
document
    .querySelectorAll('img')[0]
    .setAttribute("src", randomDiceImage);

const number2 = Math.floor(Math.random() * 6 + 1);
const randomDiceImage2 = 'images/dice' + number2 + '.png'
document
    .querySelectorAll('img')[1]
    .setAttribute("src", randomDiceImage2);
if (number1 > number2) {
    document.querySelector('h1').innerHTML = 'player1 is winner'
} else if (number2 > number1) {
    document.querySelector('h1').innerHTML = 'player2 is winner'
} else {
    document.querySelector('h1').innerHTML = 'draw'

}



// function dice(tag, count) {
//     const number = Math.random() * 6 + 1;
//     const numFloor = Math.floor(number);
//     document
//         .querySelectorAll(tag)[count]
//         .setAttribute("src", "images/dice" + numFloor + ".png");

// }
