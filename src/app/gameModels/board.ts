import { Square } from './square';
import { SquareKey } from './enums/square-key.enum';

export class Board {
    squares: object = {};

    constructor(){}

    buildBoard(){
        for (let x = 1; x <= 8; x++) {
            for (let y = 1; y <= 8; y++) {
                this.squares[SquareKey[x] + y] = new Square(SquareKey[x] + y, x, y, null);
            }
        }
        this.populateBoard()
    }

    populateBoard(){
        for (let y = 2; y <= 7; y+=5) {
            for (let x = 1; x <= 8; x++) {
                let color = 'white';
                if(y===7)
                    color = 'black'

                
            }
        }
    }
}
