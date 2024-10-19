import React from "react";

export default function About() {
  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{ backgroundImage: `url("/images/bg-desc.png")` }}
    >
      <div className="w-4/6 flex max-md:flex-col justify-between h-2/3 max-sm:h-full max-sm:gap-5 max-md:gap-10 items-center max-sm:flex-col">
        <div className="w-2/5 max-sm:w-full max-md:w-full flex flex-col justify-start items-start h-4/5">
          <h1 className="text-6xl max-sm:text-4xl font-bold text-purple mb-5 max-md:text-5xl">Design</h1>
          <p className="mt-5">
            As a full-stack developer with a strong design sensibility, I create
            intuitive and user-friendly interfaces that blend functionality and
            aesthetics. Skilled in translating wireframes into responsive web
            pages using React and Next.js, I emphasize clean, minimalistic
            layouts that align with brand identity. Proficient in tools like
            Figma, I ensure my designs are visually appealing and optimized for
            performance on all devices.
          </p>
        </div>
        <div className="w-2/5  max-sm:w-full max-md:w-full flex flex-col justify-end items-start h-2/3 max-sm:mb-20">
          <h1 className="text-6xl max-sm:text-4xl font-bold text-purple max-md:text-5xl mb-5">Engineering</h1>
          <p className="mt-5">
            My engineering focus is on building reliable and scalable systems
            that integrate client-side and server-side technologies for a
            holistic application perspective. With experience in API
            architecture, database management, and performance optimization, I
            prioritize clean, modular code for maintainability and growth.
            Driven by a passion for solving complex technical challenges, I
            strive to deliver efficient and innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
