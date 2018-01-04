import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styles: []
})
export class QuestionListComponent implements OnInit {

  questions: Question[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.questions = this.dataService.getQuestions();
  }

  addQuestion(question: Question) {
    this.dataService.addQuestion(question);
    this.questions = this.dataService.getQuestions();
  }

}
