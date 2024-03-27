/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";
import { Link } from "react-router-dom";
const New = ({card}) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 w-full bg-gray-200 lg:h-[300px] rounded-2xl h-full">
        <div>
          <img
            className="h-[200px] mt-10 ml-36 lg:w-[25%]"
            src={card.image}
            alt=""
          />
        </div>
        <div className="space-y-3 mt-8 mb-5 mx-5 text-black">
          <h3 className="text-2xl font-bold">{card.bookName}</h3>
          <p className="font-bold">By : {card.author}</p>
          <div className="flex gap-5 items-center ">
            <p className="font-bold">Tag</p>
            <p className="badge badge-outline text-[#23BE0A]">#{card.tags[0]}</p>
            <p className="badge badge-outline text-[#23BE0A]">#{card.tags[1]}</p>
            <p className="flex items-center gap-2"> <CiLocationOn />Year of Publishing:{card.yearOfPublishing} </p>
          </div>
         
          <div className="flex space-x-6">
            <p className="flex items-center gap-2"><IoPeopleOutline /> Publisher: {card.publisher}</p>
            <p className="flex items-center gap-2"><MdOutlineFindInPage />Page:{card.totalPages}</p>
          </div>
          <hr  className=" h-0.5 border-none bg-black"/>
          <div className="flex space-x-6 items-center">
            <p className="badge badge-outline text-[#328EFF] bg-[#cad5e4]">Category: {card.category}</p>
            <p className="badge badge-outline text-[#FFAC33] bg-[#e5dbcb]">Rating: {card.rating}</p>
            <Link to={`/single/${card.id}`} className="btn btn-success">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
