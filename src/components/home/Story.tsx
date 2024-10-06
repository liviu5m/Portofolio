import React from "react";

export default function Story() {
  return (
    <div className="h-screen flex items-center justify-center bg-purple">
      <div className="w-4/5 flex gap-20">
        <div className="w-1/2">
          <h1 className="text-6xl font-bold text-blue">Over the years,</h1>
          <p className="text-lg text-white mt-10">
            I've built products for companies and businesses around the globe
            ranging from marketing websites to complex solutions and enterprise
            apps with focus on fast, elegant and accessible user experiences.
            <br /><br />
            Currently, I work at Shopify as a Senior Frontend Engineer crafting
            thoughtful and inclusive experiences that adhere to web standards
            for over 3 million merchants across the world.
            <br /><br />
            Before now, I was Principal Frontend Engineer at hellotax, where I
            worked on a suite of tools and services tailored towards automated
            VAT compliance for multi-channel sellers in Europe.
            <br /><br />
            Prior to hellotax, I was Senior frontend engineering consultant with
            Pixel2HTML, building JavaScript applications and interfaces for orgs
            and individuals.
            <br /><br />I once also led the frontend team at Conectar, an e-learning
            startup through building multiple React applications into a single
            robust learning platform.
          </p>
        </div>
        <div className="w-1/2">
          <img src="/images/story.jpg" className="rounded-lg shadow-lg shadow-blue-500" alt="" />
        </div>
      </div>
    </div>
  );
}
