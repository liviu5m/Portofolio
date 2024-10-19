import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

export default function Contact() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-4/5 flex items-center justify-center flex-col">
        <h1 className="text-6xl font-bold text-purple text-center max-sm:text-3xl">
          Send me a message !
        </h1>
        <h3 className="text-center mt-10 text-2xl max-sm:text-base">
          Got a question or proposal, or just want
          <br />
          to say hello? Go ahead.
        </h3>
        <form className="w-1/2 max-md:w-4/5 mt-20 flex items-center justify-center flex-col">
          <div className="flex items-center max-sm:flex-col justify-center gap-10 w-full">
            <div className="input-group flex flex-col w-1/2  max-sm:w-full">
              <label htmlFor="name" className="text-xl text-purple  max-sm:text-lg">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="outline-none z-20 bg-transparent max-sm:text-base py-5 text-lg border-b border-purple-500 text-purple-500"
              />
            </div>
            <div className="input-group flex flex-col w-1/2  max-sm:w-full">
              <label htmlFor="email" className="text-xl text-purple max-sm:text-lg">
                Your Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="outline-none bg-transparent z-20 max-sm:text-base py-5 text-lg border-b border-purple-500 text-purple-500"
              />
            </div>
          </div>

          <div className="input-group flex flex-col mt-10 w-full">
            <label htmlFor="message" className="text-xl text-purple max-sm:text-lg">
              Your Email Address
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
              className="outline-none max-sm:text-base w-full bg-transparent z-20 py-5 text-lg border-b border-purple-500 text-purple-500 resize-none h-32"
            ></textarea>
          </div>
          <button className="relative w-80 text-center py-5 text-xl mt-10 border border-purple-500 text-purple-500 hover:text-white hover:border-purple-500 overflow-hidden group">
            <span className="relative z-10 mr-10">SHOOT</span>
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className="relative z-10"
            />
            <span className="absolute inset-0 bg-purple-500 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></span>
          </button>
        </form>
      </div>
    </div>
  );
}
