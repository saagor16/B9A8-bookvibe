/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Card = ({card}) => {
  return (
    <div>
      <Link  to={`/single/${card.id}`} className="card w-96 h-[620px] bg-base-100 shadow-xl rounded-xl ">
        <div className="mx-8 mb-5 space-y-5">
          <figure className="px-10 pt-10">
            <img
              src={card.image}
              alt={card.bookName}
              className="rounded-xl h-[320px]"
            />
          </figure>
          <div className="flex gap-5">
            <p className="badge badge-outline">{card.tags[0]}</p>
            <p className="badge badge-outline">{card.tags[1]}</p>
          </div>
          <h4>{card.bookName}</h4>
          <p>By : {card.bookName}</p>
          <hr />
          <div className="flex justify-between">
            <p>{card.category}</p>
            <div className="flex gap-3 items-center">
              <p>{card.rating}</p>
              <CiStar />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
