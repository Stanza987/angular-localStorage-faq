import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styles: []
})
export class AddQuestionComponent implements OnInit {

  @Output() questionAdded = new EventEmitter<Question>();
  text: string;
  answer: string;

  constructor() { }

  ngOnInit() {
  }

  addQuestion() {
    this.questionAdded.emit({text: this.text, answer: this.answer, hide: false});
  }

}
