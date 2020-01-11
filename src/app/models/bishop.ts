import { Piece } from './piece';
import { Board } from './board';

export class Bishop extends Piece {
    constructor(
        color: string,
        X: number,
        Y: number,
    ) {
        super(color, +X, +Y);
        this.title = 'Bishop';
    }

    calculatePossibleMoves(board: Board) {
        this.possibleMoves = [];
        let position = { Y: this.Y, X: this.X };

        const bk = this.runDistance(this.toBlackKingSide, position, board);
        const bq = this.runDistance(this.toBlackQueenSide, position, board);
        const wk = this.runDistance(this.toWhiteKingSide, position, board);
        const wq = this.runDistance(this.toWhiteQueenSide, position, board);

        this.possibleMoves = this.possibleMoves.concat(bk);
        this.possibleMoves = this.possibleMoves.concat(bq);
        this.possibleMoves = this.possibleMoves.concat(wk);
        this.possibleMoves = this.possibleMoves.concat(wq); 
        
        return this.possibleMoves;
    }
}
