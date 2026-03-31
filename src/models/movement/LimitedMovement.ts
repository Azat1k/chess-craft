import { Board } from "../Board";
import { Square } from "../Square";
import type {Movement} from "./BaseMovement";

export class LimitedMovement implements Movement {
    constructor(
        private baseMovement: Movement,
        private maxDistance: number,
    ) {}

    public getPath(board: Board, from: Square, to: Square): Square[] | null {
        const path = this.baseMovement.getPath(board, from, to);

        if (!path) return null;
        if (path.length > this.maxDistance) return null;

        return path;
    }
}