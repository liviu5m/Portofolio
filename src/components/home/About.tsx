import React from "react";

export default function About() {
  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{ backgroundImage: `url("/images/bg-desc.png")` }}
    >
      <div className="w-4/6 flex justify-between h-2/3 items-center ">
        <div className="w-2/5 flex flex-col justify-start items-start h-4/5">
          <h1 className="text-6xl font-bold text-purple mb-5">Design</h1>
          <p>
            As a full-stack developer with a strong design sensibility, I create
            intuitive and user-friendly interfaces that blend functionality and
            aesthetics. Skilled in translating wireframes into responsive web
            pages using React and Next.js, I emphasize clean, minimalistic
            layouts that align with brand identity. Proficient in tools like
            Figma, I ensure my designs are visually appealing and optimized for
            performance on all devices.
          </p>
        </div>
        <div className="w-2/5 flex flex-col justify-end items-start h-2/3">
          <h1 className="text-6xl font-bold text-purple mb-5">Engineering</h1>
          <p>
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
