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

  onGameStarted(gemeControl: {gameInterval: any, gameNumber: number}) {
    gemeControl.gameInterval = setInterval(() => {
      gemeControl.gameNumber += 1;
      console.log(gemeControl.gameNumber);
    }, 1000);
    console.log(gemeControl.gameInterval);
  }

  onGameStopped(gemeControl: {gameInterval: any,  gameNumber: number}) {
    console.log(gemeControl.gameNumber);
    clearInterval(gemeControl.gameInterval);
  }
}
