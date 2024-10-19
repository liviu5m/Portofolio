import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function Footer({ type }: { type: string }) {
  return (
    // <div className="relative z-10">
    <div
      className={`${
        type == "full" ? "h-screen max-md:h-[500px]" : "h-[600px] max-md:h-[500px]"
      }  bg-navy flex items-center justify-center flex-col`}
    >
      <div className="flex items-center max-md:items-start w-4/5 gap-40 max-md:flex-col max-md:gap-10">
        <div>
          <h1 className="text-white text-2xl mb-5">CONTACT ME</h1>
          <h2 className="text-blue text-2xl">email@email.com</h2>
        </div>
        <div>
          <h1 className="text-2xl text-purple cursor-pointer mb-5 mt-20 max-md:mt-0">
            <a href={"/"}>Home</a>
          </h1>
          <h1 className="text-2xl text-purple cursor-pointer mb-5">
            <a href={"/work"}>My Work</a>
          </h1>
          <h1 className="text-2xl text-purple cursor-pointer">
            <a href={"/resume"}>My Resume</a>
          </h1>
        </div>
      </div>
      <div className="w-4/5 bg-purple h-1 my-20"></div>
      <div className="flex items-center justify-between w-4/5">
        <h1 className="text-white text-xl">&copy; DevL 2024</h1>
        <div className="flex items-center gap-5">
          <FontAwesomeIcon icon={faGithub} className="text-2xl text-white" />
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-white" />
          <FontAwesomeIcon icon={faFacebook} className="text-2xl text-white" />
          <FontAwesomeIcon icon={faTwitter} className="text-2xl text-white" />
        </div>
      </div>
    </div>
    // </div>
  );
}
