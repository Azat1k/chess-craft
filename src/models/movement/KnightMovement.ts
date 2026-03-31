import { Board } from "../Board";
import { Square } from "../Square";
import type {Movement} from "./BaseMovement";

export class KnightMovement implements Movement {

    public getPath(_board: Board, from: Square, to: Square): Square[] | null {
        const dx = Math.abs(from.x - to.x);
        const dy = Math.abs(from.y - to.y);

        if ((dx === 1 && dy === 2) || (dx === 2 && dy === 1)) {
            return [];
        }

        return null;
    }
}