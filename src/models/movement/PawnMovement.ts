import { Board } from "../Board";
import { Square } from "../Square";
import type {Movement} from "./BaseMovement";
import { Pawn } from "../figures/Pawn";

export class PawnMovement implements Movement {

    public getPath(board: Board, from: Square, to: Square): Square[] | null {

        const figure = from.figure;
        if (!(figure instanceof Pawn)) {
            return null;
        }


        const direction = figure.direction;

        const dx = Math.abs(from.x - to.x);
        const dy = to.y - from.y;

        if (dx === 0 &&
            dy === direction &&
            to.figure === null) {
            return [];
        }

        if (dx === 0 &&
            dy === direction * 2 &&
            figure.isFirstStep &&
            to.figure === null) {
            return [
                board.getSquares(from.x,from.y + direction)
            ];
        }

        if (dx === 1 &&
            dy === direction &&
            to.figure &&
            to.figure.color !== figure.color) {
            return [];
        }

        return null;
    }
}