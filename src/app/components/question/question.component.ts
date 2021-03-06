import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Question } from '../../models/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styles: []
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  removeQuestion(question: Question) {
    this.dataService.removeQuestion(question)
  }

}
