import { useLoaderData, useParams } from "react-router-dom";

const Single = () => {
  const single = useLoaderData();
  const { id } = useParams();
  const card = single.find((card) => card.id == id);

  

  return (
    <div className="container mt-10 mx-auto">
      <h2></h2>
      <section className="bg-gray-400 text-gray-100 space-y-3">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={card.image}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col space-y-5  p-6  rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              {card.bookName}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">By : {card.author}</p>
            <hr />
            <p>{card.category}</p>
            <hr />
            <p>review: {card.review}</p>
            <div className="flex gap-5 items-center">
              <p className="">Tag</p>
              <p className="badge badge-outline">#{card.tags[0]}</p>
              <p className="badge badge-outline">#{card.tags[1]}</p>
            </div>
            <hr />
            <div className="space-y-3">
              <div className="space-y-3 gap-x-24">
                <p>Number of Pages:{card.totalPages}</p>
                <p>Publisher:{card.publisher}</p>
                <p>Year of Publishing:{card.yearOfPublishing}</p>
                <p>Rating:{card.rating}</p>
              </div>
              <div className="flex gap-4">
                <p className="btn">Read</p>
                <p className="btn">Wishlist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Single;
