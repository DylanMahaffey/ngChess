import { Component, OnInit } from '@angular/core';
import { Game } from '../gameModels/game';

@Component({
  selector: 'app-vs',
  templateUrl: './vs.component.html',
  styleUrls: ['./vs.component.scss']
})
export class VsComponent implements OnInit {

  game: Game = new Game();
  squares: object = this.game.board.squares;
  objectValues = Object.values;

  constructor() { }

  ngOnInit() {
  }

  squareSelected(){

  }
}
