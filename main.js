const startBtn = $('#timerStart');
const choiceBtn = $('#guessBtn');
const timerEl = $('#countdown'); 
const otText = $('#timer-text')

//start blink

function blink_text() {
    otText.fadeOut(500);
    otText.fadeIn(500);
}
setInterval(blink_text, 1000);

//start timer
startBtn.click( function() {
    
    $('.timer-element').text('time left: ').append(timerEl);
    let counter = 60;
    setInterval(function() {
        counter--;
        if(counter >= 0) {
        timerEl.text(counter)
        }

        if(counter <= 10) {
            $('.intro').text('hurry up')
        }

        if(counter <= 0) {
            $('.intro').text('game over')

            clearInterval(counter);
        }
    }, 1000);
})

