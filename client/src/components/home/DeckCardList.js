import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DeckContext } from '../../context/deckContext';
import CardItem from '../browse/CardItem';

function DeckCardList() {
  const { deckId } = useParams()
  const {deck, setDeck} = useContext(DeckContext)

  useEffect(() => {
    fetch(`/decks/${deckId}`)
    .then(r => r.json())
    .then(deck => setDeck(deck))
  },[deckId, setDeck])

  console.log(deck)

  const displayDeckCards = deck.deck_cards?.map(deck_card => {
    return <CardItem card={deck_card.card.card_data} key={deck_card.card.id}/>
  })

  return (
    <div className='card-list'>
      {displayDeckCards}
    </div>
  );
}

export default DeckCardList;