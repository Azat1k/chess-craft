import {Colors} from "./Colors";
import {Figure} from "./figures/Figure.ts";
import {Board} from "./Board";

export class Square {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean;
    id: number;

    constructor (board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.board = board;
        this.figure = figure;
        this.available = false;
        this.id = Math.random()
    }

    isEmpty(){
        return this.figure === null;
    }

    setFigure (figure: Figure) {
        this.figure = figure;
        this.figure.square = this;
    }

    moveFigure (target: Square) {
        if (this.figure && this.figure?.canMove(target)) {
            this.figure?.moveFigure(target)
            if(target.figure) {
                this.board.addLostFigure(target.figure)
            }
            target.setFigure(this.figure);
            this.figure = null;
        }
    }
}
