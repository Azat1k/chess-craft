import {useEffect, useState} from 'react';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Colors} from "./models/Colors";
import {Player} from "./models/Players";

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
        <BoardComponent
            board={board}
            setBoard={setBoard}
            currentPlayer={currentPlayer}
            swapPlayer={swapPlayer}
        />
      </div>
  )
}

export default App;