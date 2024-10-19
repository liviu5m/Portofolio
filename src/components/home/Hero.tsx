import React from "react";

export default function Hero() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{ backgroundImage: `url("/images/hero.png")` }}
    >
      <div className="w-4/6 lg:w-4/5 lg:ml-20">
        <h1 className="text-6xl text-blue font-bold max-sm:text-4xl">
          Full-Stack
          <br />
          Developer<span className="text-white">.</span>
        </h1>
        <p className="w-1/2 max-md:w-full mt-10 text-white text-xl max-sm:text-base">
        I focus on delivering high-quality applications that integrate functionality and user-friendly design.
        </p>
        <div className="w-1/2 max-md:w-full flex item-center justify-center gap-10 text-blue font-medium mt-20 text-lg max-sm:flex-col max-sm:text-base">
          <p>I enjoy creating efficient and scalable web applications that provide seamless user experiences across devices.</p>
          <p>With a passion for clean code and intuitive interfaces, I focus on building software that’s both robust and adaptable to future needs.</p>
        </div>
      </div>
    </div>
  );
}
