import { useEffect, useState } from "react";
import { getCards } from "../JS/card";
import New from "../section/New";

function Read() {

  const [cards, setCards] = useState([]);
  useEffect(() => {
    const savedCards = getCards();
    setCards(savedCards);
  }, []);



  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10  w-full bg-gray-500 lg:h-[300px] rounded-2xl h-full">
        {cards.map((card) => (
          <New  key={card.id} card={card}></New>
        ))}
      </div>
    </div>
  );
}

export default Read;
