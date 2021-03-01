//main selectors
const startBtn = $('#start-btn');
const choiceBtn = $('#guessBtn');
const timerEl = $('#countdown'); 
const otText = $('#timer-text')
const questionContainerElement = $('#question-container')
const questionEl = $('.question-text')
const answerBtn = $('#answer-butons')
//button selectors
const aEl = $('#choiceA')
const bEl = $('#choiceB')
const cEl = $('#choiceC')
const dEl = $('#choiceD')

let finalScore = 0;
let wrongAnswers = 0;

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

        if(counter < 59.9) {
            otText.fadeOut(5000000000);
            otText.fadeIn(50000000000);
        }

        if(counter >= 0) {
        timerEl.text(counter)
        }

        if(counter <= 10) {
            $('.intro').text('hurry up')
        }

        if(counter <= 0) {
            $('.intro').text('game over')

            clearInterval(counter);

            endGame()
        }
    }, 1000);

    $('.timer-start').addClass('hide')
    $('.choice-btn').removeClass('hide')
})

startBtn.click( () => {
    startQuiz()
})

//begin actual game

function startQuiz() {
    console.log('quiz has started')
    questionContainerElement.removeClass('hide')
    startBtn.addClass('hide')
    showQuestion()

}

function showQuestion() {
    questionEl.text('How many times can the earth fit into the sun')
    aEl.text('1,000')
    bEl.text('10,000')
    cEl.text('100,000')
    dEl.text('1,000,000')

    if(dEl.click( () => [
        questionTwo(),
        finalScore++,
    ]));
    if(aEl.click( () => [
        questionTwo(),
        wrongAnswers++,
    ]));
    if(bEl.click( () => [
        questionTwo(),
        wrongAnswers++,
    ]));
    if(cEl.click( () => [
        questionTwo(),
        wrongAnswers++,
    ]));
}

function questionTwo() {
    questionEl.text('How many of the speeches in Shakespeare’s plays are recited by women?')
    aEl.text('33%%')
    bEl.text('17%')
    cEl.text('50%')
    dEl.text('5%')

    if(bEl.click( () => [
        questionThree(),
        finalScore++,
    ]));
    if(aEl.click( () => [
        questionThree(),
        wrongAnswers++,
    ]));
    if(cEl.click( () => [
        questionThree(),
        wrongAnswers++,
    ]));
    if(dEl.click( () => [
        questionThree(),
        wrongAnswers++,
    ]));
}

function questionThree() {
    questionEl.text('Which contry consumes the most chocolate per capita?')
    aEl.text('america')
    bEl.text('germany')
    cEl.text('switzerland')
    dEl.text('belgium')

    if(cEl.click( () => [
        questionFour(),
        finalScore++,
    ]));
    if(aEl.click( () => [
        questionFour(),
        wrongAnswers++,
    ]));
    if(bEl.click( () => [
        questionFour(),
        wrongAnswers++,
    ]));
    if(dEl.click( () => [
        questionFour(),
        wrongAnswers++,
    ]));
}

function questionFour() {
    questionEl.text('which country has the oldest continuously used national flag?')
    aEl.text('denmark')
    bEl.text('mexico')
    cEl.text('cambodia')
    dEl.text('nigeria')

    if(aEl.click( () => [
        questionFive(),
        finalScore++
    ]));
    if(bEl.click( () => {
        questionFive()
        wrongAnswers++
    }));
    if(cEl.click( () => {
        questionFive()
        wrongAnswers++
    }));
    if(dEl.click( () => {
        questionFive()
        wrongAnswers++
    }));
}

function questionFive() {
    questionEl.text('What is the space between windows called?')
    aEl.text('interfenestration')
    bEl.text('clippings')
    cEl.text('the space bewteen the window')
    dEl.text('wall')

    if(aEl.click( () => [
        questionSix(),
        finalScore++
    ]));
    if(bEl.click( () => [
        questionSix(),
        wrongAnswers++
    ]));
    if(cEl.click( () => [
        questionSix(),
        wrongAnswers++
    ]));
    if(dEl.click( () => [
        questionSix(),
        wrongAnswers++
    ]));
}

function questionSix() {
    questionEl.text('how many languages are written from right to left?')
    aEl.text('5')
    bEl.text('37')
    cEl.text('12')
    dEl.text('22')

    if(cEl.click( () => [
        endGame(),
        finalScore++
    ]));
    if(aEl.click( () => [
        endGame(),
        wrongAnswers++
    ]));
    if(bEl.click( () => [
        endGame(),
        wrongAnswers++
    ]));
    if(dEl.click( () => [
        endGame(),
        wrongAnswers++
    ]));
}


function correctAnswer() {
    questionEl.text('nice job!')
}

function wrongAnswer() {
    questionEl.text('oh no, so close!')
}

function endGame() {
    questionEl.text('you did great!')
    aEl.text('')
    bEl.text('')
    cEl.text('')
    dEl.text('')
    $('.final-showing').removeClass('hide')
    $('#final-score').text('correct answers: ').append(finalScore);
    $('#final-wrong').text('wrong answers: ').append(wrongAnswers);
}

