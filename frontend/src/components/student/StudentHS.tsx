import logo from "../../assets/heroImage.png";

import { ArrowRight } from "lucide-react";

function StudentHS() {
  return (
    <div className="bg-white">
      <section className="bg-[#ffffff] bg-opacity-30 py-30 sm:py-30 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                A Platform for Student, University & Company
              </p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                Connect With Us
                <br />
                Build Your Resume
                <br />
                KickStart Your Career
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                Grow your career With Our System
              </p>

              <a
                href="/student/signup"
                title=""
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                role="button"
              >
                Join US
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>

              <p className="mt-5 text-gray-600">
                Already joined us?{" "}
                <a
                  href="/student/login"
                  title=""
                  className="text-black transition-all duration-200 hover:underline"
                >
                  Log in
                </a>
              </p>
            </div>
            <div>
              <img className="h-130 w-200" src={logo} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-between w-full sm:px-10 lg:px-30 pb-16">
        {/* Left Text */}
        <span className="text-xl font-bold text-gray-500 sm:px-6 lg:px-8 ">
          Heard Enough
        </span>

        {/* Contact Text */}
        <h2 className="text-3xl font-bold text-gray-800">CONTACT US</h2>

        {/* Circular Button */}
        <div className="pr-6">
          <button className="w-10 h-10 flex items-center justify-center bg-yellow-300 rounded-full hover:bg-yellow-400 transition">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentHS;
