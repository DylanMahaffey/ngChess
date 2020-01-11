import { Component, OnInit } from '@angular/core';
import { Board } from '../models/board';
import { Square } from '../models/square';
import { Piece } from '../models/piece';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {

  objectValues = Object.values;
  board: Board = new Board;
  selected:Square = null;

  constructor() { }

  ngOnInit() {
  }

  squareSelected(square)
  {  
    if ( this.selected )
    {
      this.board.movePiece(square, this.selected);
      this.selected = null;
    }
    else if ( square.piece && this.board.turn == square.piece.color )
    {
      this.board.showPotential(square.piece);
      this.selected = square;
    }
    else 
    {
      this.board.removePotential();
      this.selected = null;
    }
  }

  placePiece(square)
  {
    if (square.piece)
      return square.piece.title;
    else
      return '';
  }

  digestClasses(listOfClasses){
    let classes = '';
    listOfClasses.forEach(className => {
      classes += ' ' +className;
    });
    
    return classes;
  }
}
