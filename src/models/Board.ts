import {Square} from './Square';
import {Colors} from "./Colors";
import {Pawn} from "./figures/Pawn";
import {Rook} from "./figures/Rook";
import {Knight} from "./figures/Knight";
import {Bishop} from "./figures/Bishop";
import {King} from "./figures/King";
import {Queen} from "./figures/Queen";


export class Board {
    squares: Square [][] = []

    public initSquares() {
        this.squares = [] // очищаем массив что бы потом добавить функционал рестарта

        for (let i = 0; i < 8; i++) {
            const row: Square[] = []
            for (let j = 0; j < 8; j++) {
                if ((i+j)%2 !== 0 ) {
                    row.push(new Square(this, j, i, Colors.black, null)) // черные клетки
                } else {
                    row.push( new Square(this, j, i, Colors.white, null)) // белые клетки
                }
            }
            this.squares.push(row)
        }
    }

    public getSquares(x: number, y: number) {
        return this.squares[y][x]
    }

    public highlightSquares (selectedSquare: Square | null) {
        for (let i = 0; i < this.squares.length; i++) {
            const row = this.squares[i]
            for (let j = 0; j < row.length; j++) {
                const target = row[j]
                target.available = !!selectedSquare?.figure?.canMove(target)
            }
        }
    }

    public getCopyBoard(): Board {
        const newBoard = new Board()
        newBoard.squares = this.squares.map(row => row.map(square => square));
        return newBoard
    }

    private addKing() {
        new King(Colors.black, this.getSquares(4, 0))
        new King(Colors.white, this.getSquares(4, 7))
    }
    private addQueen() {
        new Queen(Colors.black, this.getSquares(3, 0))
        new Queen(Colors.white, this.getSquares(3, 7))
    }
    private addRook() {
        new Rook(Colors.black, this.getSquares(0, 0))
        new Rook(Colors.black, this.getSquares(7, 0))
        new Rook(Colors.white, this.getSquares(0, 7))
        new Rook(Colors.white, this.getSquares(7, 7))
    }
    private addKnight() {
        new Knight(Colors.black, this.getSquares(1, 0))
        new Knight(Colors.black, this.getSquares(6, 0))
        new Knight(Colors.white, this.getSquares(1, 7))
        new Knight(Colors.white, this.getSquares(6, 7))
    }
    private addBishop() {
        new Bishop(Colors.black, this.getSquares(2, 0))
        new Bishop(Colors.black, this.getSquares(5, 0))
        new Bishop(Colors.white, this.getSquares(2, 7))
        new Bishop(Colors.white, this.getSquares(5, 7))

    }
    private addPawn() {
        for (let i =0; i<8; i++) {
            new Pawn(Colors.black, this.getSquares(i, 1))
            new Pawn(Colors.white, this.getSquares(i, 6))
        }
    }

    public addFigures () {
        this.addKing()
        this.addQueen()
        this.addRook()
        this.addKnight()
        this.addBishop()
        this.addPawn()
    }
}
