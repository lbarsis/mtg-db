import { createContext, useState, useEffect } from "react";

const CollectionCardContext = createContext(null)

const CollectionCardProvider = ({ children }) => {
  const [result, setResult] = useState({})
  const [collectionCards, setCollectionCards] = useState([])
  const [manaTypes, setManaTypes] = useState([])

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
          setCollectionCards(result.data)
        });
      } 
    });
  }

  // const handleAddCardToCollection = (card) => {
  //   fetch('/add_card_to_collection', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       card_data: card
  //     })
  //   })
  //     .then(r => {
  //       if (r.ok) {
  //         r.json().then(data => console.log(data))
  //       } else {
  //         r.json().then(errors => console.log(errors))
  //       }
  //     })
  // }
 
  return (
    <CollectionCardContext.Provider value={ {collectionCards, setCollectionCards, result, setResult, nextPage, manaTypes, setManaTypes }}>
      {children}
    </CollectionCardContext.Provider>
  )

}

export { CollectionCardContext, CollectionCardProvider };