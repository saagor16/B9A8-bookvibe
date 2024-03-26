import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCardApplicationTwo } from "../utility/localstoretwo";
import NewTwo from "../section/NewTwo";

const Wishlist = () => {
  const [appliedCardsTwo, setAppliedCardsTwo] = useState([]);

  const cardsTwo = useLoaderData();
  useEffect(()=>{
    const storedCadIds = getStoredCardApplicationTwo();
    if (cardsTwo.length > 0) {

      const cardsApplied = [];
      for (const id of storedCadIds) {
          const cardTwo = cardsTwo.find(card => card.id === id);
          if (cardTwo) {
              cardsApplied.push(cardTwo)
          }
      }
      setAppliedCardsTwo(cardsApplied);
      
  }
  },[cardsTwo])
  
  return (
    <div>
      {
        appliedCardsTwo.map(cardTwo=> <NewTwo key={cardTwo.id} cardTwo={cardTwo}></NewTwo>)
      }
    </div>
   
  );
};


export default Wishlist;