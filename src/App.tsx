import {useEffect, useState} from 'react';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Colors} from "./models/Colors";
import {Player} from "./models/Players";
import LostFigures from "@/components/LostFigures.tsx";

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer] = useState(new Player (Colors.white))
  const [blackPlayer] = useState(new Player (Colors.black))
  const [currentPlayer,  setCurrentPlayer] = useState<Player | null>(null);

  function restart () {
    const newBoard = new Board();
    newBoard.initSquares()
    newBoard.addFigures()
    setBoard(newBoard);
  }

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [whitePlayer]);

  function swapPlayer () {
    setCurrentPlayer(currentPlayer?.colors === Colors.white ? blackPlayer : whitePlayer)
  }

  return (
      <div className='app'>
        <div /> {}
        <BoardComponent
            board={board}
            setBoard={setBoard}
            currentPlayer={currentPlayer}
            swapPlayer={swapPlayer}
        />
        <div style={{ height: '672px', width: '450px', alignSelf: 'start', marginTop: '-0rem' }}>
          <LostFigures
              LostWhiteFigures={board.lostWhiteFigures}
              LostBlackFigures={board.lostBlackFigures}
          />
        </div>
      </div>
  )
}

export default App;
