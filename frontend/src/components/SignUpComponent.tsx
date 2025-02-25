import { Link } from "react-router-dom";
import logo from "../assets/companylogo.png";
import { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
function SignUpComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("", { email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    // Add form validation or API call here
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-8 py-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src={logo} alt="Company Logo" className="mx-auto h-20 w-auto" />
        <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Make a new account
        </h2>
      </div>
      {/* This part covers the Sign in and forgot password UI*/}
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          action="#"
          method="POST"
          className="space-y-6"
          onSubmit={handleSubmit}
        >
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
                onChange={(e) => setEmail(e.target.value)}
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
            </div>
            <div className="mt-2 relative">
              <input
                type={isVisible ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
                type="button"
                onClick={toggleVisibility}
                aria-label={isVisible ? "Hide password" : "Show password"}
                aria-pressed={isVisible}
                aria-controls="password"
              >
                {isVisible ? (
                  <EyeOff size={20} aria-hidden="true" />
                ) : (
                  <Eye size={20} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className=" bg-indigo-600 flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
          <div className="text-black font-semibold">
            Already a member ?? Go to SignIn Page.{" "}
          </div>
          <div>
            <Link
              to="/login"
              className=" bg-gray-100  flex w-full justify-center rounded-md px-2 py-1.5 text-sm font-semibold  hover:bg-indigo-100 "
            >
              <div className="text-indigo-700">Sign in</div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpComponent;
