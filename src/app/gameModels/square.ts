import { SquareKey } from './enums/square-key.enum';
import { Piece } from './pieces/piece';

export class Square {
    title: string;
    X: SquareKey;
    Y: number;
    piece: Piece;
    classes: string[] = [];
    potential: Piece[] = [];

    constructor(
        title: string,
        X: SquareKey,
        Y: number,
        piece: Piece
    ){
        this.title = title;
        this.X = X;
        this.Y = Y;
        this.piece = piece;
        this.squareClass();
    }

    squareClass() {
        if (
            this.X % 2 === 1 && this.Y % 2 === 1
            ||
            this.X % 2 === 0 && this.Y % 2 === 0
        )
            this.classes.push('dark', 'square');
        else
            this.classes.push('square');
    }

    placePiece() {
        if (this.piece)
            return `<span class="piece">${this.piece.type}</span>`;
        else
            return '';
    }

    digestClasses() {
        let classes = `${this.title} `;
        this.classes.forEach(className => {
            classes += className + ' ';
        });
        if(this.Y === 1)
            classes += 'squareClear '

        return classes;
    }
}
