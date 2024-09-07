import { useEffect } from 'react';

type Props = {
  handleNewGame: () => void;
  wins: number;
}

export default function Header({handleNewGame, wins}: Props) {
  useEffect(() => {
    document.title = `${wins} Wins`
  }, [wins]);

  return (
    <header className=''>
      <h4>{wins} Wins</h4>
      <h3>Memory Game</h3>
      <button  onClick={handleNewGame}>New Game</button>
    </header>
  )
}