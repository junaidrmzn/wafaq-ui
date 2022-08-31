import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-results',
  templateUrl: './exam-results.component.html',
  styleUrls: ['./exam-results.component.scss'],
})
export class ExamResultsComponent implements OnInit {
  displayName: Boolean = true;
  constructor() {}
  CollectiveForm() {
    this.displayName = true;
  }
  SingleForm() {
    this.displayName = false;
  }
  ngOnInit(): void {}
}
