import React, { useContext, useEffect } from 'react';
import { DeckContext } from '../../context/deckContext';
import DeckItem from './DeckItem';
import '../../styles/home/deckList.css'

function DeckList() {
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
    return <DeckItem key={deck.id} deck={deck} />
  })

  return (
    <div className='deck-list'>
      {displayDecks}
    </div>
  );
}

export default DeckList;
