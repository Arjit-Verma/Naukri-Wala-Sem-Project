import logo from "../assets/companylogo.png";
function LoginComponent() {
  return (
    /* This parts Contains the Login Page logo and Sign in text */
    <div className="flex min-h-full flex-1 flex-col justify-center px-8 py-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src={logo} alt="Company Logo" className="mx-auto h-20 w-auto" />
        <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      {/* This part covers the Sign in and forgot password UI*/}
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <div className="flex">
              <label
                htmlFor="email"
                className="block text-sm/6 font font-medium text-gray-900"
              >
                Email address
              </label>
            </div>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          {/*This Covers the  frontend of password*/}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className=" bg-indigo-600 flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
          <div className="text-gray-700 flex justify-items-normal">
            Not a member?
            <div className="text-indigo-500 font-semibold  hover:underline hover:rounded-2xl px-2">
              {" "}
              Sign Up
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
