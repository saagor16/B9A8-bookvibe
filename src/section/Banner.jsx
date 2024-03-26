import bannerImg from "../../public/banner.png";
const Banner = () => {
  return (
    <div>
      <div className="hero h-[720px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-44 gap-16">
          <img
            src={bannerImg}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
            Books to freshen up your bookshelf
            </p>
            <button className="btn btn-primary">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
