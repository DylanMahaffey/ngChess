import { Piece } from './piece';
import { Board } from './board';

export class Pawn extends Piece{
    constructor(
        color: string,
        X: number,
        Y: number,
    ) {
        super(color, +X, +Y);
        this.title = 'Pawn';
    }

    calculatePossibleMoves(board: Board){
        this.possibleMoves = [];
        if(this.color == 'white')
        {
            if (!board.spaces[`${this.Y}${this.X + 1}`].piece)
                this.possibleMoves.push(this.kingSide({ Y: this.Y, X: this.X}))
            if (board.onTheBoard({ Y: this.Y + 1, X: this.X + 1}) && board.spaces[`${this.Y + 1}${this.X + 1}`].piece)
                this.possibleMoves.push({
                    Y: this.Y + 1,
                    X: this.X + 1,
                })
            if (board.onTheBoard({Y: this.Y - 1, X: this.X + 1}) && board.spaces[`${this.Y - 1}${this.X + 1}`].piece)
                this.possibleMoves.push({
                    Y: this.Y - 1,
                    X: this.X + 1,
                })
            
            if(this.X === 2)
                this.possibleMoves.push({
                    Y: this.Y,
                    X: this.X + 2,
                })
        }
        if(this.color == 'black')
        {
            if (!board.spaces[`${this.Y}${this.X - 1}`].piece)
                this.possibleMoves.push({
                    Y: this.Y,
                    X: this.X - 1,
                })
            if (board.onTheBoard({Y: this.Y + 1, X: this.X - 1}) && board.spaces[`${this.Y + 1}${this.X - 1}`].piece)
                this.possibleMoves.push({
                    Y: this.Y + 1,
                    X: this.X - 1,
                })
            if (board.onTheBoard({Y: this.Y - 1, X: this.X - 1}) && board.spaces[`${this.Y - 1}${this.X - 1}`].piece)
                this.possibleMoves.push({
                    Y: this.Y - 1,
                    X: this.X - 1,
                })
            if(this.X === 7)
                this.possibleMoves.push({
                    Y: this.Y,
                    X: this.X - 2,
                })
        }
        return this.possibleMoves;
    }
}
