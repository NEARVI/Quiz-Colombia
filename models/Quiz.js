import { Questions } from "./questions.js";  // Corrige la ruta si es necesario

export class Quiz {
    questionIndex = 0;
    score = 0;

    constructor(questions) {
        this.questions = questions;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    isEnded() {
        return this.questionIndex >= this.questions.length;
    }
    

    guess(answer) {
        const question = this.getQuestionIndex();
        if (question && question.correctAnswer) {
            console.log(answer);
            if (question.correctAnswer(answer)) {
                this.score++;
            }
        } else {
            console.error("Pregunta no válida o método 'correctAnswer' no encontrado.");
        }
        this.questionIndex++;
    }
    
}
