import { Board } from "../Board";
import { Square } from "../Square";
import type {Movement} from "./BaseMovement";

export class DiagonalMovement implements Movement {

    public getPath(board: Board, from: Square, to: Square): Square[] | null {
        const dx = Math.abs(from.x - to.x);
        const dy = Math.abs(from.y - to.y);

        if (dx !== dy) return null;

        const path: Square[] = [];
        const xDirection = from.x < to.x ? 1 : -1;
        const yDirection = from.y < to.y ? 1 : -1;

        let x = from.x + xDirection;
        let y = from.y + yDirection;

        while (x !== to.x && y !== to.y) {
            path.push(board.getSquares(x, y));
            x += xDirection;
            y += yDirection;
        }

        return path;
    }
}
