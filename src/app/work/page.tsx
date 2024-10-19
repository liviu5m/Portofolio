import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <Header dots={false} />
      <div className="flex items-center justify-center flex-col">
        <div className="w-4/5">
          <div className="w-full mt-80">
            <h1 className="text-center text-3xl text-main font-bold">
              <span className="text-label mr-2">/</span>work{" "}
              <span className="text-label">.</span>
            </h1>
            <p className="text-center text-lg mt-5">
              Selected work I've taken on in the past.
            </p>
          </div>
        </div>
        <div className="w-3/5 mt-20 flex flex-col items-center justify-center gap-10 mb-20">
          <Link href={"/work/selfmastery"} className="w-full">
            <div className="w-full h-60 bg-gray flex  items-center justify-center rounded-lg drop-shadow-lg hover:drop-shadow-xl hover:scale-105 cursor-pointer">
              <div className=" py-16 flex items-center max-lg:flex-col justify-between gap-16 w-1/3 max-lg:gap-5">
                <img
                  src="/images/work/selfmastery.png"
                  className="w-20"
                  alt=""
                />
                <h1 className="text-4xl font-bold text-purple max-lg:text-3xl">SelfMastery</h1>
              </div>
            </div>
          </Link>
          <Link href={"/work/timevo"} className="w-full">
            <div className="w-full h-60 bg-gray rounded-lg drop-shadow-lg flex items-center justify-center hover:drop-shadow-xl hover:scale-105 cursor-pointer">
              <div className="py-16 flex items-center justify-between max-lg:flex-col max-lg:gap-5 gap-16 w-1/3">
                <div className="w-24 h-24 rounded-full  bg-purple flex items-center justify-between">
                  <img
                    src="/images/work/timevo.svg"
                    className="w-20 ml-2"
                    alt=""
                  />
                </div>
                <h1 className="text-4xl font-bold text-purple">Timevo</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
