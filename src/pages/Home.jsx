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
      <div className="text-center mt-10 text-4xl font-bold">
        <h5>Books Items To All</h5>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {book.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
