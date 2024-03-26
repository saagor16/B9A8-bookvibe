import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCardApplication } from "../utility/localstore";
import New from "../section/New";

const Read = () => {
  const [appliedCards, setAppliedCards] = useState([]);

  const cards = useLoaderData();
  useEffect(()=>{
    const storedCadIds = getStoredCardApplication();
    if (cards.length > 0) {

      const cardsApplied = [];
      for (const id of storedCadIds) {
          const card = cards.find(card => card.id === id);
          if (card) {
              cardsApplied.push(card)
          }
      }
      setAppliedCards(cardsApplied);
      
  }
  },[cards])
  
  return (
    <div>
      {
        appliedCards.map(card=> <New key={card.id} card={card}></New>)
      }
    </div>
  );
};

export default Read;
