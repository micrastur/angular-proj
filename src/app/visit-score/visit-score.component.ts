import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-score',
  templateUrl: './visit-score.component.html',
  styleUrls: ['./visit-score.component.css']
})
export class VisitScoreComponent implements OnInit {
  visitScore = 0;
  infoVisibility = true;
  userClickHistory = [];

  constructor() { }

  ngOnInit() {
  }

  onBtnClick() {
    this.visitScore += 1;
    this.infoVisibility = !this.infoVisibility;
    this.userClickHistory.push(this.visitScore);
    console.log(this.userClickHistory);
  }
}
