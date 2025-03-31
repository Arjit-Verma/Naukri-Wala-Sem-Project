import logo from "../assets/heroImage.png";

import { ArrowRight } from "lucide-react";

//Base Hero Section For the First Landing Page

function HeroSection() {
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
                Build Your Career
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                Grow your career With Our System
              </p>
              <div className="flex flex-col space-y-4   lg:mt-16">
                <div className="flex items-center">
                  <a
                    href="/student"
                    title=""
                    className="inline-flex items-center w-45 px-6 py-4 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full hover:bg-yellow-400 focus:bg-yellow-400"
                    role="button"
                  >
                    Join As Student
                  </a>
                  <div className="px-6 font-semibold text-2xl">
                    Get the Time You Deserve
                  </div>
                </div>

                <div className="flex items-center">
                  <a
                    href="/college"
                    title=""
                    className="inline-flex items-center w-45 px-6 py-4 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full hover:bg-yellow-400 focus:bg-yellow-400"
                    role="button"
                  >
                    Join As University
                  </a>
                  <div className="px-6 font-semibold text-2xl">
                    Get the System You awaits
                  </div>
                </div>
                <div className="flex items-center">
                  <a
                    href="/company"
                    title=""
                    className="inline-flex items-center w-45 px-6 py-4 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full hover:bg-yellow-400 focus:bg-yellow-400"
                    role="button"
                  >
                    Join As Company
                  </a>
                  <div className="px-6 font-semibold text-2xl">
                    Hire People At Better Pace
                  </div>
                </div>
              </div>
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
          Heard Enough About Us, Now
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

export default HeroSection;
