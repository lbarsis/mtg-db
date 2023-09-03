import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DeckContext } from '../../context/deckContext';
import CardItem from '../browse/CardItem';

function DeckCardList() {
  const { deckId } = useParams()
  const { deck, setDeck, handleUpdateDeckName } = useContext(DeckContext)
  const [deckName, setDeckName] = useState('')

  useEffect(() => {
    fetch(`/decks/${deckId}`)
      .then(r => r.json())
      .then(deck => setDeck(deck))
  }, [deckId, setDeck])

  const handleChangeDeckName = (e) => {
    setDeckName(e.target.value)
  }

  console.log(deckName)

  const displayDeckCards = deck.deck_cards?.map(deck_card => {
    return <CardItem card={deck_card.card.card_data} key={deck_card.card.id} />
  })

  return (
    <>
      <input className='deck-title'
        name='deckName'
        placeholder={deck.deck_name}
        onChange={handleChangeDeckName}
        value={deckName}
        onBlur={() => handleUpdateDeckName(deck, deckName)}
      />
      <div className='card-list'>
        {displayDeckCards}
      </div>
    </>
  );
}

export default DeckCardList;