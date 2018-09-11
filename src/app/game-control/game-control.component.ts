import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { $ } from '../../../node_modules/protractor';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startGame = new EventEmitter<{gameNumber: number}>();
  @Output() stopGame = new EventEmitter<{gameNumber: number}>();
  number: number;
  intervalID: any;

  constructor() {
    this.number = 0;
    this.intervalID = 0;
  }

  ngOnInit() {
  }

  onStart() {
    this.intervalID = setInterval(() => {
      this.number += 1;

      this.startGame.emit({
        gameNumber: this.number
      });
    }, 1000);
  }

  onStop() {
    this.number += 1;
    clearInterval(this.intervalID);
    this.stopGame.emit({
      gameNumber: this.number
    });
  }
}
