import { Pawn } from './pawn';
import { Rook } from './rook';
import { Knight } from './knight';
import { Bishop } from './bishop';
import { Queen } from './queen';
import { King } from './king';
import { Square } from './square';
import { Piece } from './piece';

export class Board {
    spaces: object = {};
    moves: object[];
    showingPotential: object[];
    turn: string;
    whiteFallen: any[];
    blackFallen: any[];

    constructor()
    {
        this.newGame();
        this.turn = 'white';
    }

    movePiece(to: Square, from: Square)
    {
        const toX = +to.id[1];
        const toY = +to.id[0];
        const fromX = +from.id[1];
        const fromY = +from.id[0];
        
        const check = this.checkMove(from, toY, toX);
        const current = this.spaces[`${fromY}${fromX}`];
        const moveTo = this.spaces[`${toY}${toX}`];

        if(check)
        {
            
            moveTo.piece = current.piece;
            moveTo.piece.Y = toY;
            moveTo.piece.X = toX;
            current.piece = null;
            this.moves.push({
                player: this.turn,
                piece: moveTo.piece.title,
                toName: moveTo.piece.title[0] + moveTo.name,
                fromName: moveTo.piece.title[0] + current.name,
                from: {
                    Y: fromY,
                    X: fromX
                },
                to: {
                    Y: toY,
                    X: toX
                }
            })
            this.switchTurns();
        }
        
        this.removePotential();
    }

    switchTurns()
    {
        if ( this.turn == 'white' )
            this.turn = 'black';
        else    
            this.turn = 'white';
    }

    checkMove(from, Y, X)
    {
        let check = false;
        const moves = from.piece.calculatePossibleMoves(this);        
        if(moves.length == 0)
            return check
        moves.forEach((p: any) => { 
            if( p.Y === Y && p.X === X )
                check = true;
        });
        return check;
    }

    takesPiece(square: Square)
    {
        if (square.piece.color == 'white')
            this.whiteFallen.push(square.piece);
        else
            this.blackFallen.push(square.piece);
    }

    onTheBoard(move)
    {
        if (move.Y >= 1 && move.Y <= 8 && move.X >= 1 && move.X <= 8 )
            return true;

        return false;
    }

    occupiedSpace(square: Square)
    {
        if(square && square.piece)
        {
            if( square.piece.color === this.turn )
                return { occupied: true, friendly: true };
            
            if( square.piece.color !== this.turn )
                return { occupied: true, friendly: false };
        }


        return { occupied: false, friendly: false };
    }

    showPotential(piece)
    {
        this.removePotential();
        piece.calculatePossibleMoves(this).forEach((s: any) => {
            this.spaces[`${s.Y}${s.X}`].classes.push('potential')
        });
    }

    removePotential()
    {
        Object.values(this.spaces).forEach((s: any) => {
            s.classes = s.classes.filter(c => c !== 'potential');
        });
    }

    generateSpaces()
    {
        for (let y = 1; y <= 8; y++) 
        {
            for (let x = 1; x <= 8; x++) 
            {
                const space = `${y}${x}`;
                const piece = this.populateBoard(x, y);
                const square = new Square(space, ['space'], piece);
                this.spaces[space] = square;
            } 
        }
    }

    populateBoard(x, y)
    {
        if(x <= 2)
        {
            if (x == 2)
                return new Pawn('white', x, y);
            if (x == 1)
            {
                if (y == 1 || y == 8)
                    return new Rook('white', x, y);
                if (y == 2 || y == 7)
                    return new Knight('white', x, y);
                if (y == 3 || y == 6)
                    return new Bishop('white', x, y);
                if (y == 4)
                    return new Queen('white', x, y);
                if (y == 5)
                    return new King('white', x, y);
            }
        }
        
        if(x >= 7)
        {
            if (x == 7)
                return new Pawn('black', x, y);
            if (x == 8)
            {
                if (y == 1 || y == 8)
                    return new Rook('black', x, y);
                if (y == 2 || y == 7)
                    return new Knight('black', x, y);
                if (y == 3 || y == 6)
                    return new Bishop('black', x, y);
                if (y == 4)
                    return new Queen('black', x, y);
                if (y == 5)
                    return new King('black', x, y);
            }
        }
            
        
        return null
    }

    newGame() 
    {
        this.moves = [];
        this.generateSpaces();
    }
}
