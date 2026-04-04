import { Board } from "../Board";
import { Square } from "../Square";
import type {Movement} from "./BaseMovement";

export class LimitedMovement implements Movement {
    private readonly maxIntermediateSquares: number;

    constructor(
        private baseMovement: Movement,
        maxSteps: number,
    ) {
        this.maxIntermediateSquares = maxSteps - 1;
    }

    public getPath(board: Board, from: Square, to: Square): Square[] | null {
        const path = this.baseMovement.getPath(board, from, to);

        if (path === null) return null;
        if (path.length > this.maxIntermediateSquares) return null;

        return path;
    }
}