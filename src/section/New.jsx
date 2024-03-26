const New = (cardId) => {
  return (
    <div>
      <div>
        <img
          className="h-[200px] mt-10 ml-14 lg:w-[25%]"
          src="../../public/banner.png"
          alt=""
        />
      </div>
      <div className="space-y-3 mb-5 mt-5">
        <h3>{cardId.author}</h3>
        <p>By : Awlad Hossain</p>
        <div className="flex gap-5 items-center ">
          <p className="">Tag</p>
          <p className="badge badge-outline">#</p>
          <p className="badge badge-outline">#</p>
        </div>
        <div>
          <p>Year of Publishing: 1924</p>
        </div>
        <div className="flex justify-around">
          <p>Publisher: Scribner</p>
          <p>Page 192</p>
        </div>
        <hr />
        <div className="flex justify-around">
          <p>Category: Classic</p>
          <p>Rating: 4.5</p>
          <p>View Details</p>
        </div>
      </div>
    </div>
  );
};

export default New;
