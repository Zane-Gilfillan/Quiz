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
const subEl = $('.submit-btn')
const inputEl = $('#player-input')
//leaderboard variables
let firstEl = $('#first')
let secondEl = $('#second')
let thirdEl = $('#third')
let fourthEl = $('#fourth')

let finalScore = 0;
let wrongAnswers = 0;
//start blink
function blink_text() {
    otText.fadeOut(500);
    otText.fadeIn(500);
}
setInterval(blink_text, 1000);

//start timer
startBtn.click( () => {
        
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
            // $('.intro').text('hurry up')
        }

        if(counter <= 0) {
            $('.intro').text('game over')
            $('.timer-element').text('you did great!')

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
    questionContainerElement.removeClass('hide')
    startBtn.addClass('hide')
    showQuestion()
}

//---------------------------------------------------Question One
//brings up first question and then will push to second question when choice is made
function showQuestion() {
    questionEl.text('How many times can the earth fit into the sun')
    aEl.text('1,000')
    bEl.text('10,000')
    cEl.text('100,000')
    dEl.text('1,000,000')

    if(dEl.click( () => [
        finalScore++,
        questionTwo(),
        
    ]));
    if(aEl.click( () => [
        wrongAnswers++,
        questionTwo(),
        
    ]));
    if(bEl.click( () => [
        wrongAnswers++,
        questionTwo(),
        
    ]));
    if(cEl.click( () => [
        wrongAnswers++,
        questionTwo(),
        
    ]));
    
    
}

//-----------------------------------------------Question Two
//each button will just push to the next question

function questionTwo() {
    questionEl.text('How many of the speeches in Shakespeare’s plays are recited by women?')
    aEl.text('33%%')
    bEl.text('17%')
    cEl.text('50%')
    dEl.text('5%')

    if(bEl.click( () => [
        finalScore++,
        questionThree(),
        
    ]));
    if(aEl.click( () => [
        wrongAnswers++,
        questionThree(),
        
    ]));
    if(cEl.click( () => [
        wrongAnswers++,
        questionThree(),
        
    ]));
    if(dEl.click( () => [
        wrongAnswers++,
        questionThree(),
        
    ]));

    
    
}

//--------------------------------------------------Question Three
function questionThree() {
    questionEl.text('Which contry consumes the most chocolate per capita?')
    aEl.text('america')
    bEl.text('germany')
    cEl.text('switzerland')
    dEl.text('belgium')

    if(cEl.click( () => [
        finalScore++,
        questionFour(),
        
    ]));
    if(aEl.click( () => [
        wrongAnswers++,
        questionFour(),
        
    ]));
    if(bEl.click( () => [
        wrongAnswers++,
        questionFour(),
        
    ]));
    if(dEl.click( () => [
        wrongAnswers++,
        questionFour(),
        
    ]));

    
    
}

//--------------------------------------Question Four
function questionFour() {
    questionEl.text('which country has the oldest continuously used national flag?')
    aEl.text('denmark')
    bEl.text('mexico')
    cEl.text('cambodia')
    dEl.text('nigeria')

    if(aEl.click( () => [
        finalScore++,
        questionFive(),
        
    ]));
    if(bEl.click( () => {
        wrongAnswers++,
        questionFive()
        
    }));
    if(cEl.click( () => {
        wrongAnswers++,
        questionFive()
        
    }));
    if(dEl.click( () => {
        wrongAnswers++,
        questionFive()
        
    }));

    
    
}


//--------------------------------------------------Question Five 
function questionFive() {
    questionEl.text('What is the space between windows called?')
    aEl.text('interfenestration')
    bEl.text('clippings')
    cEl.text('the space bewteen the window')
    dEl.text('wall')

    if(aEl.click( () => [
        finalScore++,
        questionSix(),
        
    ]));
    if(bEl.click( () => [
        wrongAnswers++,
        questionSix(),
        
    ]));
    if(cEl.click( () => [
        wrongAnswers++,
        questionSix(),
        
    ]));
    if(dEl.click( () => [
        wrongAnswers++,
        questionSix(),
        
    ]));

    
    
}

//----------------------------------------------Question Six
function questionSix() {
    questionEl.text('how many languages are written from right to left?')
    aEl.text('5')
    bEl.text('37')
    cEl.text('12')
    dEl.text('22')

    if(cEl.click( () => [
        finalScore++,
        endGame(),
        
    ]));
    if(aEl.click( () => [
        wrongAnswers++,
        endGame(),
        
    ]));
    if(bEl.click( () => [
        wrongAnswers++,
        endGame(),
        
    ]));
    if(dEl.click( () => [
        wrongAnswers++,
        endGame(),
    ]));

}

//End Game Function
function endGame() {
    questionEl.text('you did great!')
    counter = 0
    aEl.text('')
    bEl.text('')
    cEl.text('')
    dEl.text('')
    $('.final-showing').removeClass('hide')
    questionContainerElement.addClass('hide')
    $('#final-score').text('highscore: ').append(finalScore);
    $('.timer-element').text('you did great!')
    
}


//These are the last two functions i need to set up for local storage to work and keep an up to date leader board
// function setScoreBoard() {
    
// }


subEl.click( () => {
    let nameEl = document.getElementById('user-name').value
    firstEl.text(nameEl + '---' + finalScore)
    localStorage.setItem(user, nameEl)
    localStorage.setItem(score, finalScore)
    setScoreBoard()
    endGame()
})

