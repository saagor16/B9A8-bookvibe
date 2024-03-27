import contImg from "../../public/banner.png";

const Contact = () => {
  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-600 text-gray-100 mt-10">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Lets talk!
            </h2>
            <div className="text-gray-400">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <img
            src={contImg}
            alt=""
            className="p-6 h-52 md:h-64"
          />
        </div>
        <form noValidate="" className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder="name"
              className="w-full p-3 rounded bg-gray-800 text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="email"
              className="w-full p-3 rounded bg-gray-800 text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"

              className="w-full p-3 rounded bg-gray-800 text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
