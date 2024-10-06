import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Work() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-4/5 bg-white flex items-center justify-center h-1/2">
        <div className="w-1/2 h-full  p-20">
          <h1 className="text-purple text-5xl font-bold">
            I build &<br />
            design stuff
          </h1>
          <h3 className="mt-10 text-2xl">
            Open source <br />
            projects, web apps <br /> and experimentals.
          </h3>
          <button className="relative w-80 text-center py-5 text-xl mt-10 border border-black hover:text-white hover:border-purple-500 overflow-hidden group">
            <span className="relative z-10 mr-10">See my work</span>
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className="relative z-10"
            />

            <span className="absolute inset-0 bg-purple-500 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></span>
          </button>
        </div>
        <div className="w-1/2 border-l-2 border-purple-500 p-20 h-full">
          <h1 className="text-purple text-5xl font-bold mb-10">My Skills</h1>
          <div className="grid grid-cols-2">
            <div className="flex items-center justify-center mb-3 gap-3 w-fit">
              <img src="/images/icon/html.png" width={20} alt="" />
              <h1 className="text-lg text-blue font-bold">HTML</h1>
            </div>
            <div className="flex items-center justify-center mb-3 gap-3 w-fit">
              <img src="/images/icon/css-3.png" width={20} alt="" />
              <h1 className="text-lg text-blue font-bold">CSS</h1>
            </div>
            <div className="flex items-center justify-center mb-3 gap-3 w-fit">
              <img src="/images/icon/tailwind.svg" width={20} alt="" />
              <h1 className="text-lg text-blue font-bold">Tailwind CSS</h1>
            </div>
            <div className="flex items-center justify-center mb-3 gap-3 w-fit">
              <img src="/images/icon/js.png" width={20} alt="" />
              <h1 className="text-lg text-blue font-bold">JavaScript</h1>
            </div>
            <div className="flex items-center justify-center mb-3 gap-3 w-fit">
              <img src="/images/icon/ts.png" width={20} alt="" />
              <h1 className="text-lg text-blue font-bold">TypeScript</h1>
            </div>
            <div className="flex items-center justify-center mb-3 gap-3 w-fit">
              <img src="/images/icon/react.png" width={20} alt="" />
              <h1 className="text-lg text-blue font-bold">React</h1>
            </div>
            <div className="flex items-center justify-center mb-3 gap-3 w-fit">
              <img src="/images/icon/database.png" width={20} alt="" />
              <h1 className="text-lg text-blue font-bold">Databases</h1>
            </div>
            <div className="flex items-center justify-center mb-3 gap-3 w-fit">
              <img src="/images/icon/php.png" width={20} alt="" />
              <h1 className="text-lg text-blue font-bold">PHP</h1>
            </div>
            <div className="flex items-center justify-center mb-3 gap-3 w-fit">
              <img src="/images/icon/laravel.png" width={20} alt="" />
              <h1 className="text-lg text-blue font-bold">Laravel</h1>
            </div>
            <div className="flex items-center justify-center mb-3 gap-3 w-fit">
              <img src="/images/icon/java.png" width={20} alt="" />
              <h1 className="text-lg text-blue font-bold">Java</h1>
            </div>
            <div className="flex items-center justify-center mb-3 gap-3 w-fit">
              <img src="/images/icon/idea.png" width={20} alt="" />
              <h1 className="text-lg text-blue font-bold">Problem Solving</h1>
            </div>
            <div className="flex items-center justify-center mb-3 gap-3 w-fit">
              <img src="/images/icon/github.png" width={20} alt="" />
              <h1 className="text-lg text-blue font-bold">Github</h1>
            </div>
            <div className="flex items-center justify-center mb-3 gap-3 w-fit">
              <img src="/images/icon/terminal.png" width={20} alt="" />
              <h1 className="text-lg text-blue font-bold">Terminal</h1>
            </div>
            <div className="flex items-center justify-center mb-3 gap-3 w-fit">
              <img src="/images/icon/write.png" width={20} alt="" />
              <h1 className="text-lg text-blue font-bold">Fast Typing</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
