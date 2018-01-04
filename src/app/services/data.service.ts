import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {

  questions: Question[];

  constructor() { }

  // Get Questions from LocalStorage
  getQuestions() {
    (localStorage.getItem('questions') === null) ? this.questions = [] : this.questions = JSON.parse(localStorage.getItem('questions'));
    return this.questions;
  }

  // Add Question to LocalStorage
  addQuestion(question: Question) {

    // let questions;                                                      // Initialize local variable

    if (localStorage.getItem('questions') === null) {
      // questions = [];
      this.questions.unshift(question);                                      // Push new question
      localStorage.setItem('questions', JSON.stringify(this.questions));     // Set new array to LocalStorage
     } else {
       this.questions = JSON.parse(localStorage.getItem('questions'));
       this.questions.unshift(question);                                     // Add new question
       localStorage.setItem('questions', JSON.stringify(this.questions));    // Reset LocalStorage
     }
  }

  // Remove Question from LocalStorage
  removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question === this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }
}
