import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];

  startGame(increment: {i: number}) {
    this.numbers.push(increment.i);
  }

  stopGame() {
    console.log('Game Stopped');
  }
}
