import React from "react";

import Triangle from "./Triangle.svg";

export default function Banner() {
  return (
    <>
      <div className="h-[calc(100vh-90px)] bg-green-500 flex flex-col justify-center items-center px-6 lg:px-14 gap-4 border-b-3 border-b-[#0047af]" id="Home">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-center leading-tight lg:leading-normal xl:max-w-[75%]">
          <span className="bg-gradient-to-r from-[#007aff] to-[#0047af] inline-block text-transparent bg-clip-text">
            Empowering the Future&nbsp;
          </span>

          <span className="text-white">with AI and Mobile Innovation.</span>
        </h1>

        <p className="text-white text-center text-xl lg:text-3xl xl:text-4xl font-semibold xl:max-w-[75%] ">
          Welcome to Eaisoft, a pioneering force in the world of AI powered
          software applications
        </p>
      </div>
    </>
  );
}
