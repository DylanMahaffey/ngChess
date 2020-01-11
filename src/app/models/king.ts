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
        let move;

        move = this.toBlack(position);
         if (
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).occupied ||
            board.onTheBoard(move) && 
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).friendly
        )
        this.possibleMoves.push(move);
        move = this.toWhite(position);
         if (
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).occupied ||
            board.onTheBoard(move) && 
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).friendly
        )
        this.possibleMoves.push(move);
        move = this.kingSide(position);
         if (
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).occupied ||
            board.onTheBoard(move) && 
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).friendly
        )
        this.possibleMoves.push(move);
        move = this.queenSide(position);
         if (
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).occupied ||
            board.onTheBoard(move) && 
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).friendly
        )
        this.possibleMoves.push(move);


        move = this.toBlackKingSide(position);
         if (
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).occupied ||
            board.onTheBoard(move) && 
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).friendly
        )
        this.possibleMoves.push(move);
        move = this.toBlackQueenSide(position);
         if (
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).occupied ||
            board.onTheBoard(move) && 
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).friendly
        )
        this.possibleMoves.push(move);
        move = this.toWhiteKingSide(position);
         if (
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).occupied ||
            board.onTheBoard(move) && 
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).friendly
        )
        this.possibleMoves.push(move);
        move = this.toWhiteQueenSide(position);
         if (
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).occupied ||
            board.onTheBoard(move) && 
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).friendly
        )
        this.possibleMoves.push(move);

        return this.possibleMoves;
    }
}
