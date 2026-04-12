import {Colors} from "../Colors";
import {Square} from "../Square";
import logo from '../../assets/white-king.png'
import {Board} from "../Board";
import type {Movement} from "../movement/BaseMovement";


export enum FigureNames {
    FIGURE = 'Фигура',
    KING = 'Король',
    QUEEN = 'Ферзь',
    ROOK = 'Ладья',
    KNIGHT = 'Конь',
    BISHOP = 'Слон',
    PAWN = 'Пешка',
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    square: Square;
    name: FigureNames;
    static counter: number = 0;
    id: number;
    board: Board;
    movement: Movement[];

    constructor(color: Colors, square: Square) {
        Figure.counter++;
        this.color = color;
        this.square = square;
        this.square.figure = this;
        this.logo = null
        this.name = FigureNames.FIGURE
        this.id = Figure.counter
        this.board = square.board;
        this.movement = []
    }

    canMove(target: Square): boolean {
        if (target.figure?.color === this.color || target.figure?.name === FigureNames.KING) {
            return false;
        }

        for (const pattern of this.movement) {
            const path = pattern.getPath(this.board, this.square, target);

            if (path !== null) {
                const isPathClear = path.every(square => square.isEmpty());

                if (isPathClear) {
                    return true;
                }
            }
        }

        return false;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    moveFigure (_target: Square): void {
    }
}