const startBtn = $('#timerStart');
const choiceBtn = $('#guessBtn');
const timerEl = $('#countdown'); 
const otText = $('timer-text')

//start timer
startBtn.click( function() {
    let counter = 60;
    setInterval(function() {
        counter--;
        if(counter >= 0) {
        timerEl.text(counter)
        }
        if(counter === 0) {
        otText.text('game over');
        clearInterval(counter);
        }
    }, 10);
})
