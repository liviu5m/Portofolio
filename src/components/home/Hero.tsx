import React from "react";

export default function Hero() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{ backgroundImage: `url("/images/hero.png")` }}
    >
      <div className="w-4/6">
        <h1 className="text-6xl text-blue font-bold">
          Full-Stack
          <br />
          Developer<span className="text-white">.</span>
        </h1>
        <p className="w-1/2 mt-10 text-white text-xl">
        I focus on delivering high-quality applications that integrate functionality and user-friendly design.
        </p>
        <div className="w-1/2 flex item-center justify-center gap-10 text-blue font-medium mt-20 text-lg">
          <p>I enjoy creating efficient and scalable web applications that provide seamless user experiences across devices.</p>
          <p>With a passion for clean code and intuitive interfaces, I focus on building software that’s both robust and adaptable to future needs.</p>
        </div>
      </div>
    </div>
  );
}
