import { Link } from "react-router-dom";
import bannerImg from "../../public/banner.png";
const Banner = () => {
  return (
    <div>
      <div className="hero h-full lg:h-[720px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-44 gap-16">
          <img
            src={bannerImg}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="lg:space-y-6 ">
            <h1 className="text-5xl font-bold">On Books News!</h1>
            <p className="py-6">
            Knowing where to buy books can be challenging. So, here are the best book review sites to help you avoid buying books that  regret reading.
            Books to freshen up your bookshelf
            </p>
            <Link to="/listedbook"className="btn btn-success">View The List</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
