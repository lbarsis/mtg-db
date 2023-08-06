import React, { useContext } from 'react';
import { DeckContext } from '../../context/deckContext';
import DeckItem from './DeckItem';
import '../../styles/home/deckList.css'

function DeckList() {
  const { decks } = useContext(DeckContext)

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
