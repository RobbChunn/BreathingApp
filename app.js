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
});


// Grow/Shrink Circle

const growCricle = () => {
    circleProgress.classList.add('circle-grow');
    setTimeout(() => {
        circleProgress.classList.remove('circle-grow');
    }, 6000);
};


//Breathing Instructions

const breathTextUpdate = () => {
    breathsLeft--;
    breathText.innerText = breathsLeft;
    instructions.innerText = "Breathe in deeply";
    setTimeout(() => {
        instructions.innerText = "Hold your breath";
        setTimeout(() => {
            instructions.innerText = "Exhale slowly";
        }, 2000)
    }, 4000);
};


// Breathing App Function
const breathingApp = () => {
    const breathingAnimation = setInterval(() => {
        if (breathsLeft === 0) {
            clearInterval(breathingAnimation);
            instructions.innerText = "Breathing session completed. Click 'Begin' to start another session!";
            start.classList.remove('button-inactive');
            breathsLeft = numberOfBreaths.value;
            breathsText.innerText = breathsLeft;
            return;
        }
        growCricle();
        breathTextUpdate();
    }, 12000);
}


// Start Breathing

start.addEventListener('click', () => {
    start.classList.add('button-inactive');
    instructions.innerText = "Get relaxed and ready to begin breathing";
    setTimeout(() => {
        instructions.innerText = "Breathing exercise is about to begin...";
        setTimeout(() => {
             breathingApp();
             growCricle();
             breathTextUpdate();
        }, 3000);
    }, 3000);
});