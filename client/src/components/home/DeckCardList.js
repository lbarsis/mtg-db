import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DeckContext } from '../../context/deckContext';
import CardItem from '../browse/CardItem';

function DeckCardList() {
  const { deckId } = useParams()
  const { deck, setDeck, handleUpdateDeck } = useContext(DeckContext)
  const [formData, setFormData] = useState({
    deck_name: "",
    description: ""
  })

  useEffect(() => {
    fetch(`/decks/${deckId}`)
      .then(r => r.json())
      .then(deck => setDeck(deck))
  }, [deckId, setDeck])

  useEffect(() => {
    if (deck) {
      setFormData({
        deck_name: deck.deck_name || "",
        description: deck.description || ""
      })
    }
  }, [deck])

  const handleChangeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const displayDeckCards = deck.deck_cards?.map(deck_card => {
    return <CardItem card={deck_card.card.card_data} key={deck_card.card.id} />
  })

  return (
    <>
      <input className='deck-title'
        name="deck_name"
        onChange={handleChangeFormData}
        value={formData.deck_name}
        onBlur={() => handleUpdateDeck(deck, formData)}
      />
      <input className='deck-title'
        name="description"
        onChange={handleChangeFormData}
        value={formData.description}
        onBlur={() => handleUpdateDeck(deck, formData)}
      />
      <div className='card-list'>
        {displayDeckCards}
      </div>
    </>
  );
}

export default DeckCardList;