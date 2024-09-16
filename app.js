import { newQuestions } from "./data/Questions.js";  
import { Quiz } from "./models/Quiz.js";  
import { UI } from "./models/ui.js";  

const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        ui.showScores(quiz.score);  // Muestra el puntaje en la consola o usa otro método si es necesario
    } else {
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
            quiz.guess(currentChoice);
            renderPage(quiz, ui);
        });
        ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);  // Asegúrate de pasar la indexación correcta
    }
};

function main() {
    const quiz = new Quiz(newQuestions);  
    const ui = new UI();  

    renderPage(quiz, ui);
}

main();

// brillo
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const quiz = document.querySelector('.quiz');

    // Añadir la clase `brighter` cuando la página se carga
    body.classList.add('brighter');

    quiz.addEventListener('mouseover', () => {
        body.classList.remove('brighter');
    });

    quiz.addEventListener('mouseout', () => {
        body.classList.add('brighter');
    });
});


