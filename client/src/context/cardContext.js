import { createContext, useState, useEffect } from "react";

const CardContext = createContext(null)

const CardProvider = ({ children }) => {
  const [result, setResult] = useState({})
  const [cards, setCards] = useState([])
  const [manaTypes, setManaTypes] = useState([])

  useEffect(() => {
    fetch("https://api.scryfall.com/cards/search?q=*").then((r) => {
      if (r.ok) {
        r.json().then((result) => {
          setResult(result)
          setCards(result.data)
        });
      } 
    });
  }, []);

  useEffect(() => {
    fetch("https://api.scryfall.com/symbology").then((r) => {
      if (r.ok) {
        r.json().then((result) => {
          setManaTypes(result.data)
        });
      } 
    });
  }, []);

  const nextPage = () => {
    fetch(result.next_page).then((r) => {
      if (r.ok) {
        r.json().then((result) => {
          setResult(result)
          setCards(result.data)
        });
      } 
    });
  }
 
  const handleAddCardToCollection = (card) => {
    fetch('/add_card_to_collection', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        card_data: card
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
    <CardContext.Provider value={ {cards, setCards, result, setResult, nextPage, manaTypes, setManaTypes, handleAddCardToCollection}}>
      {children}
    </CardContext.Provider>
  )

}

export { CardContext, CardProvider };