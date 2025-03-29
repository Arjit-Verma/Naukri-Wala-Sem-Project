import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import loginIllustration from "../../assets/office.jpg";

function CompanySignupPage() {
  return (
    <div className="w-full bg-white pt-4 pl-4">
      <div className="">
        <Link
          to="/student"
          className="mb-4 text-black flex items-center space-x-2"
        >
          <ArrowLeft size={35} className="text-black" />
        </Link>
      </div>

      <div className="flex items-center justify-center min-h-screen w-full bg-white">
        <div className="max-w-6xl min-h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-20 ">
          {/* Left Side - Login Form */}
          <div className="flex flex-col justify-center w-full">
            {/* Back Button */}

            {/* Welcome Text */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get Started
            </h2>

            <div className="py-5 lg:px-5 bg-white shadow-md rounded-md">
              <div className="text-center">
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
                  Make Your Account
                </h2>
              </div>

              <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Password
                      </label>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                      placeholder="Enter your password"
                    />
                    {/* Re-enter Password */}
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Re-enter Password
                      </label>
                    </div>
                    <input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      required
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                      placeholder="Re-enter your password"
                    />
                  </div>

                  {/* Sign In Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                {/* OR Divider */}
                <div className="flex items-center my-6">
                  <hr className="flex-grow border-gray-300" />
                  <span className="px-4 text-gray-500">or</span>
                  <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Login */}
                <div className="flex flex-col space-y-3 text-black hover:bg-indigo-200">
                  <button className="flex items-center justify-center w-full border py-2 rounded-md shadow-sm">
                    <img
                      src="https://www.svgrepo.com/show/355037/google.svg"
                      alt="Google"
                      className="h-5 mr-3"
                    />
                    Sign Up with Google
                  </button>
                </div>

                {/* Sign Up Link */}
                <p className="mt-6 text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="hidden md:flex justify-center items-center md:col-span-1 w-full min-h-screen">
            <img
              src={loginIllustration}
              alt="Login Illustration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanySignupPage;
