import { Board } from "../Board";
import { Square } from "../Square";
import type {Movement} from "./BaseMovement";

export class HorizontalMovement implements Movement {

    public getPath(board: Board, from: Square, to: Square): Square[] | null {
        if (from.y !== to.y) return null;

        const path: Square[] = [];
        const min = Math.min(from.x, to.x);
        const max = Math.max(from.x, to.x);

        for (let x = min + 1; x < max; x++) {
            path.push(board.getSquares(x, from.y));
        }

        return path;
    }
}
