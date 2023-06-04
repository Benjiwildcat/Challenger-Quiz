
let quizDiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let questionEl = document.querySelector("#question");
let timerEl = document.querySelector("#timer");
let score = ("100%", "83", "66%", "50%", "33%", "16%");
let scoreScreen = document.getElementById("score")

let timer = 101

let timerID = setInterval(function () {

    timer = Math.max(0, timer - 1);
    timerEl.textContent = timer
    if (timer === 0) {
        clearInterval(timerID);
    }


}, 1000)

// quizDiv.addEventListener("click", function() {

//     if 

// }

// )



let questions = [

    { question: "What was the original name of Mario?", answers: ["Redman", "Jumpman", "Balloon Fighter", "Wario"], correctAnswer: "Jumpman" },
    { question: "What year did Super Mario Bros release in the U.S.?", answers: ["1983", "1989", "1990", "1985"], correctAnswer: "1985" },
    { question: "What is the name of the power-up that comes from the brown leaf?", answers: ["Tanooki", "Grizzly", "Hanafunda", "Nine Tails"], correctAnswer: "Tanooki" },
    { question: "What was Princess Peach's original name?", answers: ["Cherry", "Blossom", "Pauline", "Toadstool"], correctAnswer: "Toadstool" },
    { question: "What year did the original Mario Kart release in the U.S.?", answers: ["1987", "1992", "1984", "1994"], correctAnswer: "1992" },
    { question: "What borough of New York are the Mario Bros. From?", answers: ["Brooklyn", "Queens", "Bronx", "Manhattan"], correctAnswer: "Brooklyn" },
]


let currentQuestion = 0



function renderQuestion() {
    console.log(currentQuestion, questions.length)

    if (currentQuestion < questions.length) {
        questionEl.textContent = questions[currentQuestion].question

        questionButton1.textContent = questions[currentQuestion].answers[0]
        questionButton2.textContent = questions[currentQuestion].answers[1]
        questionButton3.textContent = questions[currentQuestion].answers[2]
        questionButton4.textContent = questions[currentQuestion].answers[3]
    } else {
        score = timer
        console.log(score)
        clearInterval(timerID)
        endQuiz()
    }
}


renderQuestion();

quizDiv.addEventListener("click", function (event) {


    if (currentQuestion < questions.length) {
        if (event.target.matches("button")) {

            if (event.target.innerText === questions[currentQuestion].correctAnswer) {
                result.textContent = "correct!"
            }
            else {
                result.textContent = "Incorrect :("
                timer -= 25
            }

            currentQuestion++
            renderQuestion();



        }
    } else (endQuiz())


});

function endQuiz() {

    // if (questions.length === [6]) {
    scoreScreen.classList.add("d-block")
    scoreScreen.classList.remove("d-none")
    quizDiv.classList.add("d-none")
    // return console.log("quiz complete!")
    // }
}













