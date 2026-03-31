import { Board } from "../Board";
import { Square } from "../Square";
import type {Movement} from "./BaseMovement";

export class VerticalMovement implements Movement {

    public getPath(board: Board, from: Square, to: Square): Square[] | null {
        if (from.x !== to.x) return null;

        const path: Square[] = [];
        const min = Math.min(from.y, to.y);
        const max = Math.max(from.y, to.y);

        for (let y = min + 1; y < max; y++) {
            path.push(board.getSquares(from.x, y));
        }

        return path;
    }
}