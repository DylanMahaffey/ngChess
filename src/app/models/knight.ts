import { Piece } from './piece';
import { Board } from './board';

export class Knight extends Piece {
    constructor(
        color: string,
        X: number,
        Y: number,
    ) {
        super(color, +X, +Y);
        this.title = 'Knight';
    }

    calculatePossibleMoves(board: Board) {
        this.possibleMoves = [];
        let move;

        move = { Y: this.Y + 2, X: this.X + 1}
        if (
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).occupied ||
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).friendly
        )
        this.possibleMoves.push(move);

        move = {Y: this.Y + 2, X: this.X - 1 }
        if (
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).occupied ||
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).friendly
        )
        this.possibleMoves.push(move);

        move = {Y: this.Y + 1, X: this.X + 2 }
        if (
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).occupied ||
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).friendly
        )
        this.possibleMoves.push(move);

        move = { Y: this.Y - 1, X: this.X + 2 }
        if (
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).occupied ||
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).friendly
        )
        this.possibleMoves.push(move);

        move = { Y: this.Y - 2, X: this.X + 1 }
        if (
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).occupied ||
            board.onTheBoard(move) && 
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).friendly
        )
        this.possibleMoves.push(move);

        move = { Y: this.Y - 2, X: this.X - 1 }
        if (
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).occupied ||
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).friendly
        )
        this.possibleMoves.push(move);

        move = { Y: this.Y + 1, X: this.X - 2 }
        if (
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).occupied ||
            board.onTheBoard(move) &&
            !board.occupiedSpace(board.spaces[`${move.Y}${move.X}`]).friendly
        )
        this.possibleMoves.push(move);

        move = { Y: this.Y - 1, X: this.X - 2 }
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
