import { createContext, useState } from "react";

const DeckContext = createContext(null)

function DeckProvider({ children }) {
  const [decks, setDecks] = useState([])
  const [deck, setDeck] = useState({})

  const handleAddDeck = () => {
    fetch('/decks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(r => {
        if (r.ok) {
          r.json().then(deck => {
            setDecks([
              ...decks,
              deck
            ])
          })
        } else {
          r.json().then(errors => console.log(errors))
        }
      })
  }

  const handleAddCardToDeck = (card, deck) => {
    // console.log(card)
    fetch('/deck_cards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        card: card,
        deck_id: deck.id
      })
    })
    .then(r => {
      if (r.ok) {
        r.json().then(data => console.log(data))
      } else {
        r.json().then(errors => console.log(errors))
      }
    })
  }

  const handleUpdateDeck = (deck, formData) => {
    fetch(`/decks/${deck.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        deck_name: formData.deck_name,
        description: formData.description
      })
    })
    .then(r => r.json()).then(deck => console.log(deck))
  } 

  const handleNavigateToDeck = (deck) => {
    fetch(`/decks/${deck.id}`)
    .then(r => r.json())
    .then(deck => console.log(deck))
  }

  return (
    <DeckContext.Provider value={{ decks, setDecks, handleAddDeck, handleAddCardToDeck, handleNavigateToDeck, deck, setDeck, handleUpdateDeck }}>
      {children}
    </DeckContext.Provider>
  );
}

export { DeckContext, DeckProvider };
