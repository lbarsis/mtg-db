import { createContext, useState, useEffect } from "react";

const CardContext = createContext(null)

const CardProvider = ({ children }) => {
  const [result, setResult] = useState({})
  const [cards, setCards] = useState([]);

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
 
  return (
    <CardContext.Provider value={ {cards, setCards, result, setResult, nextPage}}>
      {children}
    </CardContext.Provider>
  )

}

export { CardContext, CardProvider };