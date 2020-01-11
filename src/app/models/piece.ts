import { Board } from './board';

export class Piece {
    title: string;
    color: string;
    X: number;
    Y: number;
    possibleMoves: object[];
    check: boolean;

    constructor(
        color: string, 
        X: number, 
        Y: number
    )
    {
        this.color = color;
        this.X = X;
        this.Y = Y;
        this.check = false;
        this.possibleMoves = [];
    }

    getPosition() 
    {
        return {
            piece: this.title,
            X: this.X,
            Y: this.Y
        };
    }

    move(X, Y)
    {
        this.X = +X;
        this.Y = +Y;

        return this;
    }

    runDistance (next, param, board: Board): object[]
    {
        let s = next(param);
        
        const moves = [];
        while(true)
        {
            if(board.onTheBoard(s))
                moves.push(s);
            else
                break;
            
            s = next(s);
        }
        
        return moves;
    }

    // straign advance
    toBlack(c)
    {
        return {
            Y: c.Y+1,
            X: c.X
        }
    }
    toWhite(c)
    {
        return {
            Y: c.Y - 1,
            X: c.X
        }
    }
    queenSide(c)
    {
        return {
            Y: c.Y,
            X: c.X - 1
        }
    }
    kingSide(c)
    {
        return {
            Y: c.Y,
            X: c.X + 1
        }
    }

    // diagonal advance
    toBlackKingSide(c) 
    {
        return {
            Y: c.Y + 1,
            X: c.X + 1
        }
    }
    toBlackQueenSide(c) 
    {
        return {
            Y: c.Y - 1,
            X: c.X + 1
        }
    }
    toWhiteKingSide(c) 
    {
        return {
            Y: c.Y + 1,
            X: c.X - 1
        }
    }
    toWhiteQueenSide(c) 
    {
        return {
            Y: c.Y - 1,
            X: c.X - 1
        }
    }
}
