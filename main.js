const startBtn = $('#timerStart');
const choiceBtn = $('#guessBtn');
const timerEl = $('#countdown'); 
const otText = $('#timer-text')
const questionEl = $('.question-text')
const answerBtn = $('.choice-btn')
let shuffQuestions, currentQuestionIndex

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
    console.log('this is working!')
    shuffQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex - 0
    showQuestion()
    selectAnswer()
    nextQuestion()

}


function nextQuestion() {
    showQuestion(shuffQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.text('this is my first question')
    $('.answer-one').text('blah blah')
    $('.answer-two').text('blah blah blah')
    $('.answer-three').text('blah blah blah blah')
    $('.answer-four').text('blah blah blah blah blah')
}



function selectAnswer() {
    answerBtn.click( function() {
        console.log('hello')
    })

}

function correctAnswer() {
    
}

const questions = [
    {
        question:'i am eating a piece of bread',
        answers: [
            {text: 'of course i am', correct: true},
            {text: 'there is no way', correct: false}
        ]
    }
]


