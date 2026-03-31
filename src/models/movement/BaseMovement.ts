import { Board } from "../Board";
import { Square } from "../Square";

export interface Movement {
    getPath(board: Board, from: Square, to: Square): Square[] | null;
}