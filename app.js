const circleProgress = document.querySelector('.circle-progress');
const numberOfBreaths = document.querySelector('.breath-input');
const start = document.querySelector('.start');
const instructions = document.querySelector('.instructions');
const breathText = document.querySelector('.breaths-text');

let breathsLeft = 3;

// Watching for seelected breaths from user
numberOfBreaths.addEventListener('change', () => {
    breathsLeft = numberOfBreaths.value;
    breathText.innerText = breathsLeft;
})