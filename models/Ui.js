export class UI {
    constructor() {
        this.modal = document.getElementById('modal');
        this.modalMessage = document.getElementById('modal-message');
        this.modalTitle = document.getElementById('modal-title');
        this.closeBtn = document.getElementById('close-btn');
        this.acceptBtn = document.getElementById('accept-btn');

        this.closeBtn.onclick = () => {
            this.modal.style.display = 'none';
        };

        this.acceptBtn.onclick = () => {
            this.modal.style.display = 'none';
            location.reload(); // O redirige a otra página
        };

        window.onclick = (event) => {
            if (event.target === this.modal) {
                this.modal.style.display = 'none';
            }
        };
    }

    showQuestion(text) {
        const questionTitle = document.getElementById("question");
        if (questionTitle) {
            questionTitle.innerText = text;
        } else {
            console.error("Elemento con id 'question' no encontrado.");
        }
    }

    showQuestion(text) {
        const questionTitle = document.getElementById("question");
        if (questionTitle) {
            questionTitle.innerText = text;
        } else {
            console.error("Elemento con id 'question' no encontrado.");
        }
    }

    showChoices(choices, callback){
        const choicesContainer = document.getElementById("choices")
        choicesContainer.innerHTML = "";

        for(let i=0; i < choices.length; i++){
            const button = document.createElement("button");
            button.innerText = choices[i];
            button.className = "buttom";
            button.addEventListener("click", () => callback(choices[i]))

            choicesContainer.append(button);
        }
    }

    showScores(score) {
        this.modalMessage.innerText = `Tu puntaje es: ${score}`;
        this.modal.style.display = 'block';
    }

    showProgress(currentIndex, total) {
        const progressElement = document.getElementById("progress");
        if (progressElement) {
            progressElement.innerHTML = `Question ${currentIndex} of ${total}`;
        } else {
            console.error("Elemento con id 'progress' no encontrado.");
        }
    }
}
