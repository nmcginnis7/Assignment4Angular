import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() onGameStarted = new EventEmitter<{i: number}>();
  @Output() onGameStopped = new EventEmitter();

  gameStarted = false;
  timer = null;
  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.gameStarted = true;
    let i = 0;
    const game = this;
    this.timer = setInterval(function(){
      game.onGameStarted.emit({i: i});
      i++;
    }, 1000);
  }

  stopGame() {
    this.gameStarted = false;
    clearInterval(this.timer);
    this.onGameStopped.emit();
  }

}
