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
 
  return (
    <CollectionCardContext.Provider value={ {collectionCards, setCollectionCards, result, setResult, nextPage, manaTypes, setManaTypes}}>
      {children}
    </CollectionCardContext.Provider>
  )

}

export { CollectionCardContext, CollectionCardProvider };