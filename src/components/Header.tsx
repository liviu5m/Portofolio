"use client";

import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faCode, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Header({
  active,
  setScrollLevel,
  scrollToSection,
  dots,
}: {
  active?: number;
  setScrollLevel?: (e: number) => void;
  scrollToSection?: (e: number) => void;
  dots: boolean;
}) {
  const [logo, setLogo] = useState("DevL");

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (active == 1) setLogo("DevL");
    else setLogo(`</>`);
  }, [active]);

  return (
    <div className={`w-screen ${dots ? "h-screen" : "h-fit"} fixed px-32 max-lg:px-10 max-md:px-5 py-16 flex flex-col z-50 justify-between`}>
      <div className="relative z-50 ">
        <div className="flex items-center justify-between">
          <div className="logo text-4xl font-bold tracking-widest text-blue">
            <Link href="/">
              {logo == "DevL" ? logo : <FontAwesomeIcon icon={faCode} />}
            </Link>
          </div>
          <div>
            <div>
              <div className="relative">
                <button>
                  <FontAwesomeIcon
                    icon={faBars}
                    className={`text-4xl max-sm:text-blue-500  ${
                      active == 3 ? "text-blue" : "text-purple"
                    }`}
                    onClick={() => setIsOpen(true)}
                  />
                </button>
                <div
                  className={`w-80 bg-white rounded-lg shadow-lg py-5 z-50 px-10 shadow-gray-400/40 absolute ${
                    isOpen ? "-right-1 top-0" : "top-0 right-max"
                  }`}
                >
                  <div className="flex justify-end">
                    <FontAwesomeIcon
                      icon={faX}
                      className="text-3xl text-purple cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                  <h1 className="mt-2 text-lg text-purple-500">
                    <Link href={"/work"}>My Work</Link>
                  </h1>
                  <h1 className="mt-2 text-lg text-purple-500">
                    <Link href={"/resume"}>My Resume</Link>
                  </h1>
                  <h2 className="mt-5 text-label text-lg">Contact</h2>
                  <p className="mt-2 text-lg mb-4">email@email.com</p>
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-xl hover:scale-110 cursor-pointer hover:text-blue-500"
                    />
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-xl hover:scale-110 cursor-pointer hover:text-blue-500"
                    />
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-xl hover:scale-110 cursor-pointer hover:text-blue-500"
                    />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-xl hover:scale-110 cursor-pointer hover:text-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {dots && setScrollLevel && scrollToSection && (
        <div
          className={`${
            active == 6 ? "hidden" : ""
          } flex items-end w-full  justify-end`}
        >
          <div className={`flex flex-col items-center justify-center gap-4`}>
            <div
              className={`${
                active == 1
                  ? "w-5 h-5 border-2 border-purple-500"
                  : `w-3 h-3 ${active == 3 ? "bg-blue" : "bg-purple"} rotate-45`
              }`}
              onClick={() => {
                setScrollLevel(1);
                scrollToSection(0);
              }}
            ></div>
            <div
              className={`${
                active == 2
                  ? "w-5 h-5 border-2 border-purple-500"
                  : `w-3 h-3 ${
                      active == 3 ? "bg-blue" : "bg-purple"
                    } rotate-45 `
              }`}
              onClick={() => {
                setScrollLevel(2);
                scrollToSection(1);
              }}
            ></div>
            <div
              className={`${
                active == 3
                  ? "w-5 h-5 border-2 border-blue-500"
                  : `w-3 h-3 ${
                      active == 3 ? "bg-blue" : "bg-purple"
                    } rotate-45 `
              }`}
              onClick={() => {
                setScrollLevel(3);
                scrollToSection(2);
              }}
            ></div>
            <div
              className={`${
                active == 4
                  ? "w-5 h-5 border-2 border-purple-500"
                  : `w-3 h-3 ${
                      active == 3 ? "bg-blue" : "bg-purple"
                    } rotate-45 `
              }`}
              onClick={() => {
                setScrollLevel(4);
                scrollToSection(3);
              }}
            ></div>
            <div
              className={`${
                active == 5
                  ? "w-5 h-5 border-2 border-purple-500"
                  : `w-3 h-3 ${
                      active == 3 ? "bg-blue" : "bg-purple"
                    } rotate-45 `
              }`}
              onClick={() => {
                setScrollLevel(5);
                scrollToSection(4);
              }}
            ></div>
          </div>
        </div>
      )}
      <div className="h-1"></div>
    </div>
  );
}
