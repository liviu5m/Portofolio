import Header from "@/components/Header";
import React from "react";

export default function page() {
  return (
    <div>
      <Header dots={false} />
      <div className="flex items-center justify-center flex-col">
        <div className="w-4/5">
          <div className="w-full mt-80">
            <h1 className="text-center text-3xl text-main font-bold">
              <span className="text-label mr-2">/</span>work <span className="text-label">.</span>
            </h1>
            <p className="text-center text-lg mt-5">Selected work I've taken on in the past.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
