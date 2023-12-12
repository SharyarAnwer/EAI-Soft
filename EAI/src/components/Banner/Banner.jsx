import React from "react";

import Triangle from "./Triangle.svg";

export default function Banner() {
  return (
    <div className="bg-[#0a192f]">

      <video
        class="absolute left-0 top-0 h-screen w-full object-cover opacity-60 grayscale"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://eaisoft.com/assets/hero-section-video.mp4" type="video/mp4" />
      </video>

      <div
        className="h-screen flex flex-col justify-center items-center px-6 lg:px-14 gap-4 border-b-3 border-b-[#0047af] relative z-10"
        id="Home"
      >
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-center xl:max-w-[75%] leading-8">
          <span className="bg-gradient-to-r from-[#007aff] to-[#0047af] text-transparent bg-clip-text">
            Empowering the Future&nbsp;
          </span>

          <span className="text-white">with AI and Mobile Innovation.</span>
        </h1>

        <p className="text-white text-center text-xl lg:text-3xl xl:text-4xl font-semibold xl:max-w-[75%] ">
          Welcome to Eaisoft, a pioneering force in the world of AI powered
          software applications
        </p>
      </div>
    </div>
  );
}
