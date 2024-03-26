import Banner from "../section/Banner";
import Card from "../section/Card";
import { useEffect, useState } from "react";

const Home = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="mt-10">
        <Banner></Banner>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {book.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
