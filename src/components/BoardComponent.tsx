import React, {type FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import {Square} from "../models/Square";
import SquareComponent from "./SquareComponent";
import {Player} from "../models/Players";
import { Textarea } from "@/components/ui/warcraftcn/textarea";


interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
    const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);

    function click (square: Square) {
        if (selectedSquare && selectedSquare !== square && selectedSquare.figure?.canMove(square)) {
            selectedSquare.moveFigure(square);
            swapPlayer();
            setSelectedSquare(null);
        } else {
            if (square.figure?.color === currentPlayer?.colors) {
                setSelectedSquare(square);
            }
        }

    }

    function updateBoard () {
        const newBoard = board.getCopyBoard ()
        setBoard(newBoard)
    }
    
    function highlightSquares() {
        board.highlightSquares(selectedSquare)
        updateBoard()
    }
    
    useEffect(() => {
        highlightSquares()
    }, [selectedSquare])

    return (
        <>
                <Textarea className="max-w-sm" rows="10" placeholder={currentPlayer?.colors} />;
            <div className='board'>
                {board.squares.map((row , index) =>
                    <React.Fragment key={index}>
                        {row.map(square =>
                            <SquareComponent
                                click = {click}
                                square={square}
                                key={square.id}
                                selected={square.x === selectedSquare?.x && square.y === selectedSquare?.y}
                            />
                        )}
                    </React.Fragment>
                )}
            </div>
        </>


    )
}

export default BoardComponent;