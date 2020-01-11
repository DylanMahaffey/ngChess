import { Piece } from './piece';
import { Board } from './board';

export class King extends Piece {
    constructor(
        color: string,
        X: number,
        Y: number,
    ) {
        super(color, +X, +Y);
        this.title = 'King';
    }

    calculatePossibleMoves(board: Board) {
        this.possibleMoves = [];
        let position = { Y: this.Y, X: this.X };

        const tb = this.runDistance(this.toBlack, position, board);
        const tw = this.runDistance(this.toWhite, position, board);
        const ks = this.runDistance(this.kingSide, position, board);
        const qs = this.runDistance(this.queenSide, position, board);

        const bk = this.runDistance(this.toBlackKingSide, position, board);
        const bq = this.runDistance(this.toBlackQueenSide, position, board);
        const wk = this.runDistance(this.toWhiteKingSide, position, board);
        const wq = this.runDistance(this.toWhiteQueenSide, position, board);

        this.possibleMoves = this.possibleMoves.concat(bk);
        this.possibleMoves = this.possibleMoves.concat(bq);
        this.possibleMoves = this.possibleMoves.concat(wk);
        this.possibleMoves = this.possibleMoves.concat(wq);

        this.possibleMoves = this.possibleMoves.concat(tb);
        this.possibleMoves = this.possibleMoves.concat(tw);
        this.possibleMoves = this.possibleMoves.concat(ks);
        this.possibleMoves = this.possibleMoves.concat(qs);

        return this.possibleMoves;
    }
}
