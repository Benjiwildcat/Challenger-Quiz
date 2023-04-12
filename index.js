
let quizDiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1");

let timer = 90

timerID = setInterval(function () {

    timer -= 1


}, 1000)



let questions = [

    { question: "What was the original name of Mario?", answers: ["Redman", "Jumpman", "Balloon Fighter", "Wario"], correctAnswer: "Jumpman" },
    { question: "What year did Super Mario Bros release in the U.S.?", answers: ["1983", "1989", "1990", "1985"], correctAnswer: "1985" },
    { question: "What is the name of the power-up that comes from the brown leaf?", answers: ["Tanooki", "Grizzly", "Hanafunda", "Nine Tails"], correctAnswer: "Tanooki" },
    { question: "What was Princess Peach's original name?", answers: ["Cherry", "Blossom", "Pauline", "Toadstool"], correctAnswer: "Toadstool" },
    { question: "What year did the original Mario Kart release in the U.S.?", answers: ["1987", "1992", "1984", "1994"], correctAnswer: "1992" },
]


let currentQuestion = []



function renderQuestion() {

    console.log(questions[currentQuestion].question)
    console.log(questions[currentQuestion].answers[0])
    console.log(questions[currentQuestion].answers[1])
    console.log(questions[currentQuestion].answers[2])
    console.log(questions[currentQuestion].answers[3])
    console.log(questions[currentQuestion].correctAnswer)

}




quizDiv.addEventListener("click", function (event) {

    if (event.target.matches("button")) {
        console.log("clicked!")

        renderQuestion();
        currentQuestion++

    }





})













