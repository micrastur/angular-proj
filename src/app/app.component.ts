import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    input {
      border-radius: 20px;
    }
  `]
})
export class AppComponent {
  title = 'app';
  gameNumber;
  intervalID;

  onGameStarted(gameEvent: {gameNumber: number}) {
    this.gameNumber = gameEvent.gameNumber;
    console.log(this.gameNumber);
  }
}
