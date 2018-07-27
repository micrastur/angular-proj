import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { $ } from '../../../node_modules/protractor';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startGame = new EventEmitter<{gameInterval: any, gameNumber: number}>();
  @Output() stopGame = new EventEmitter<{gameInterval: any, gameNumber: number}>();
  number: number;
  interval: number;

  constructor() {
    this.number = 0;
    this.interval = 0;
  }

  ngOnInit() {
  }

  onStart() {
    this.startGame.emit({
      gameInterval: this.interval,
      gameNumber: this.number
    });
  }

  onStop() {
    console.log(this.interval);
    this.stopGame.emit({
      gameInterval: this.interval,
      gameNumber: this.number
    });
  }
}
