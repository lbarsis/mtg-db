import React, { useContext, useEffect } from 'react';
import '../../styles/home/home.css'
import { DeckContext } from '../../context/deckContext';

function Home() {
  const { decks, setDecks } = useContext(DeckContext)

  useEffect(() => {
    fetch('/decks')
      .then(r => {
        if (r.ok) {
          r.json().then(decks => setDecks(decks))
        } else {
          r.json().then(errors => console.log(errors))
        }
      })
  }, [setDecks])

  const displayDecks = decks.map(deck => {
    return deck.deck_name
  })

  return (
    <div>
      <div className='category-container'>
        {displayDecks}
      </div>
    </div>
  );
}

export default Home;
