import { useState, useEffect } from 'react';

import './App.css';
import shuffle from './utilities/shuffle';
import type { Card } from './components/Card';
import Header from './components/Header.tsx';
import { CardComponent } from './components/Card';

export default function App() {
  const [cards, setCards] = useState<Card[]>(shuffle);
  const [flippedCards, setFlippedCards] = useState<Card[] | []>([]);
  const [pickOne, setPickOne] = useState<Card | null>(null);
  const [pickTwo, setPickTwo] = useState<Card | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [wins, setWins] = useState(0);

  useEffect(() => {
    if (pickOne && pickTwo) {
      setDisabled(true);
      if (pickOne.image === pickTwo.image) {
        setFlippedCards((flippedCards) => {
          return [...flippedCards, pickOne, pickTwo];
        });
        setWins(prevWins => prevWins + 1);
        resetPicks();
      } else {
        setTimeout(() => {
          toggleCard(pickOne);
          toggleCard(pickTwo);
          resetPicks();
        }, 2000);
      }
    }
  }, [pickTwo]);

  function resetPicks() {
    setPickOne(null);
    setPickTwo(null);
    setDisabled(false);
  }

  function handleClick(card: Card) {
    if (!disabled && !flippedCards.some((c) => c.id === card.id)) {
      if (!pickOne) {
        setPickOne(card);
        toggleCard(card);
      } else if (!pickTwo) {
        setPickTwo(card);
        toggleCard(card);
      }
    }
  }

  function toggleCard(card: Card) {
    setCards((cards) => {
      const newCards = cards.map((c) => {
        if (c.id === card.id) {
          return { ...c, flipped: !c.flipped };
        } else {
          return c;
        }
      });
      return newCards;
    });
  }

  function handleNewGame() {
    setCards(shuffle());
  }

  return (
    <>
      <Header handleNewGame={handleNewGame} wins={wins} />
      <div className='grid grid-cols-4 grid-rows-4'>
      {cards?.map((card) => {
        return (
          <div onClick={() => handleClick(card)}>
            <CardComponent {...card} />
          </div>
        );
      })}
    </div>
    </>
    
  );
}
