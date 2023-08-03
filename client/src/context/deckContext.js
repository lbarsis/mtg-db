import { createContext, useState, useEffect } from "react";

const DeckContext = createContext(null)

function DeckProvider({ children }) {
  const [decks, setDecks] = useState([])
  
  useEffect(() => {
    fetch('/decks')
      .then(r => {
        if (r.ok) {
          r.json().then(decks => setDecks(decks))
        } else {
          r.json().then(errors => console.log(errors))
        }
      })
  }, [])

  const handleAddDeck = () => {
    fetch('/decks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(r => {
        if (r.ok) {
          r.json().then(data => console.log(data))
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

  return (
    <DeckContext.Provider value={{ decks, setDecks, handleAddDeck, handleAddCardToDeck }}>
      {children}
    </DeckContext.Provider>
  );
}

export { DeckContext, DeckProvider };
