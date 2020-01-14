import { Board } from './board';

export class Game {
    board: Board = new Board;

    constructor(){
        this.board.buildBoard();
    }
}
