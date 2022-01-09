const quizData = [
    {
        question: "Kolku e 9+5/2",
        a: "15",
        b: "4",
        c: "7, ocigledno",
        d: "11.5",
        correct: "d",
    },
    {
        question: "Sto znaci HTML?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminal MotherLoad",
        correct: "a",
    },
    {
        question: "Koj e najgolem CAR vo vojnite zgradi?",
        a: "Stefan",
        b: "Dule",
        c: "Matej",
        d: "Rade",
        correct: "c",
    },
    {
        question: "Koj e pretsedatel na Makedonija?(2021)",
        a: "Venko Filipce",
        b: "Stevolino Stevce Pendaroski",
        c: "Michael Jordan",
        d: "Matej Beleski",
        correct: "d",
    },


];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Tocno odgovori ${score}/${quizData.length} prasanja.</h2>
                
                <button onclick="location.reload()">Odnovo</button>
            `;
        }
    }
});