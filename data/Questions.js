import { Questions } from "../models/questions.js";  // Asegúrate de que la ruta sea correcta
import { data } from "./data.js";

export const newQuestions = data.map(question => new Questions(question.question, question.choices, question.answer));
