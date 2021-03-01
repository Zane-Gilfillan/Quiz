
//game variables
const startBtn = $('#start-btn');
const nextBtn = $('#next-btn');
const questionContainer = $('#question-container');
const questionText = $('#question')
const choiceBtn = $('#answer-buttons');
let shuffQuestions, currentQuestionIndex

//timer variables
const timerEl = $('#countdown'); 
const otText = $('#timer-text');




//start blink
function blink_text() {
    otText.fadeOut(500);
    otText.fadeIn(500);
}
setInterval(blink_text, 1000);

//start timer and game
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

    startQuiz()
})

//this button will move us to the next question after we make a slection
nextBtn.click( () => {
    currentQuestionIndex++
    nextQuestion()
})

//begin actual game
function startQuiz() {
    startBtn.addClass('hide')
    questionContainer.removeClass('hide')
    shuffQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    nextQuestion()


}

function nextQuestion() {
    resetState()
    showQuestion(shuffQuestions[currentQuestionIndex])
}








const questions = [
    {
        question: 'what is 2 + 2??',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
            {text: '22', correct: false},
            {text: '22', correct: false},
        ]
    },

    {
        question: 'what is 4 + 4??',
        answers: [
            {text: '8', correct: true},
            {text: '22', correct: false},
            {text: '22', correct: false},
            {text: '22', correct: false},
        ]
    },

    {
        question: 'what is 6 + 6??',
        answers: [
            {text: '12', correct: true},
            {text: '22', correct: false},
            {text: '22', correct: false},
            {text: '22', correct: false},
        ]
    },
]