import { Piece } from './piece';
import { Board } from './board';

export class Rook extends Piece {
    constructor(
        color: string,
        X: number,
        Y: number,
    ) {
        super(color, +X, +Y);
        this.title = 'Rook';
    }

    calculatePossibleMoves(board: Board) {
        this.possibleMoves = [];
        let position = { Y: this.Y, X: this.X };

        const fr = this.runDistance(this.toBlack, position, board);
        const bk = this.runDistance(this.toWhite, position, board);
        const ri = this.runDistance(this.kingSide, position, board);
        const lf = this.runDistance(this.queenSide, position, board);

        this.possibleMoves = this.possibleMoves.concat(fr);
        this.possibleMoves = this.possibleMoves.concat(bk);
        this.possibleMoves = this.possibleMoves.concat(ri);
        this.possibleMoves = this.possibleMoves.concat(lf);

        return this.possibleMoves;
    }
}
