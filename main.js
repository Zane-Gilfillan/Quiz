
//game variables
const startBtn = $('#timerStart');
const nextBtn = $('#nextQuestion');
const questionEl = $('.question-container');
const questionText = $('.question')
const choiceBtn = $('.choice-btn');
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
    console.log("next question check")
    currentQuestionIndex++
    nextQuestion()
})

//begin actual game
function startQuiz() {
    shuffQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    startBtn.addClass('hide')
    nextBtn.removeClass('hide')
    questionEl.removeClass('hide')
    nextQuestion()

}

function nextQuestion() {
    resetState()
    showQuestion(shuffQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        choiceBtn.append(button)
    })
}

function selectAnswer(e) {
    const selectedButon = e.target
    const correct = selectedButon.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(choiceBtn.children()).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffQuestions.length > currentQuestionIndex + 1) {
        nextBtn.removeClass('hide')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.removeClass('hide')
    }
    nextBtn.removeClass('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function resetState() {
    clearStatusClass(document.body)
    nextBtn.addClass('hide')
    while (choiceBtn.firstChild) {
        choiceBtn.removeChild
        (choiceBtn.firstChild)
    }
}



const questions = [
    {
        question: 'what is 2 + 2??',
        answers: [
            {text: 'i have no idea', correct: true},
            {text: 'it could be anything', correct: false},
            {text: 'ummmmmmmmmm, what?', correct: false},
            {text: 'yoyoyoyoyoyo', correct: false}
        ]
    },

    {
        question: 'what is 4 + 4??',
        answers: [
            {text: 'yeah once again, no idea', correct: true},
            {text: 'egg time', correct: false},
            {text: 'egg time', correct: false},
            {text: 'egg time', correct: false},
        ]
    },

    {
        question: 'what is up my dude',
        answers: [
            {text: 'lol', correct: true},
            {text: 'omg', correct: false},
            {text: 'jaja', correct: false},
            {text: 'omfgggggg', correct: false},
        ]
    },
]

