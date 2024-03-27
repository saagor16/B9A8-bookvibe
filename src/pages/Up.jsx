import { Link } from "react-router-dom";

const Up = () => {
  return (
    <div>
      <div className="flex flex-col p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100 w-full items-center">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">
            Sign Up to access your account
          </p>
        </div>
        <form noValidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Username
              </label>
              <input
                type="text"
                name="text"
                id="text"
                placeholder="username"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="..@email.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Confirm password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
            <div className="flex items-start">
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
              >
                Sign up
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Dont have an account yet?
              <Link
                to="/in"
                rel="noopener noreferrer"
                className="hover:underline text-violet-400"
              >
                Sign in
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Up;
