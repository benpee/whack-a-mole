const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelectorAll('.#time-left');
const score = document.querySelectorAll('.#score');

let result = 0;
let currentTime = timeLeft.textContent;

const randomSquare = function () {
    square.forEach(className => {
        className.classList.remove('mole');
    })
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    // assign the id of the randomPosition to hitPosition
    hitPosition = randomPosition.id
};

square.forEach(id => {
    id.addEventListener('mouseup', function () {
        if (id.id === hitPosition) {
            result = result + 1;
            score.textContent = result;
        }
    })
})

const moveMole = function () {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
};
moveMole();

const countDown = function () {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (current === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result);
    }
}

let timerId = setInterval(countDown, 1000)
