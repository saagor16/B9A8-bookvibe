import { useLoaderData, useParams } from "react-router-dom";


const Single = () => {
  const single = useLoaderData();
  const { id } = useParams();
  const card = single.find((card) => card.id == id);

  

  return (
    <div className="container mt-10 mx-auto">
  
      <section className="bg-gray-200 text-gray-100 space-y-3 lg:h-[720px] rounded-xl">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center lg:pt-32 lg:pl-16  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={card.image}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-[620px] xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col space-y-5 lg:pr-24 lg:pl-16  rounded-sm  lg:text-left text-black">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              {card.bookName}
            </h1>
            <p className="mt-4 mb-4  sm:mb-12 text-xl">By : {card.author}</p>
            <hr />
            <p className="text-xl">{card.category}</p>
            <hr />
            <p><span className="text-xl font-bold">review</span>: {card.review}</p>
            <div className="flex gap-5 items-center">
              <p className="text-xl font-bold">Tag</p>
              <p className="badge badge-outline text-[#23BE0A]">#{card.tags[0]}</p>
              <p className="badge badge-outline text-[#23BE0A]">#{card.tags[1]}</p>
            </div>
            <hr />
            <div className="space-y-3">
              <div className="space-y-3 gap-x-24">
                <p>Number of Pages: <span className="text-xl font-bold">{card.totalPages}</span></p>
                <p>Publisher: <span className="text-xl font-bold">{card.publisher}</span></p>
                <p>Year of Publishing: <span className="text-xl font-bold">{card.yearOfPublishing}</span></p>
                <p>Rating: <span className="text-xl font-bold">{card.rating}</span></p>
              </div>
              <div className="flex gap-4">
                <p className="btn btn-outline btn-primary">Read</p>
                <p className="btn btn-outline btn-accent">Wishlist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Single;
