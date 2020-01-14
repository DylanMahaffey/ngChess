import { Colors } from '../enums/colors.enum';
import { SquareKey } from '../enums/square-key.enum';

export class Piece {
    type: string;
    id: string;
    color: Colors;
    X: SquareKey;
    Y: number;

    constructor(
        type: string,
        id: string,
        color: Colors,
        X: SquareKey,
        Y: number
    ){
        this.type = type;
        this.id = id;
        this.color = color
        this.X = X;
        this.Y = Y;
    }
}
