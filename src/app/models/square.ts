import { Piece } from './piece';

export class Square {
    id: string;
    name: string;
    classes: string[];
    piece: Piece;

    constructor(
        id: string,
        classes: string[],
        piece: Piece
    ){
        this.id = id;
        this.classes = classes;
        this.piece = piece;

        this.classes.push(this.squareClass(id))
        this.nameSquare();        
    }

    squareClass(space) {
        if (
            space[0] % 2 === 1 && space[1] % 2 === 1
            ||
            space[0] % 2 !== 1 && space[1] % 2 !== 1
        )
            return 'dark';
        else
            return '';
    }

    nameSquare(){
        this.name = String.fromCharCode(96 + +this.id[0]) + `${this.id[1]}`;
    }
}
