import React from "react";

import { useInView } from "react-intersection-observer";

import Category from "./Category";

import SmartToyIcon from "@mui/icons-material/SmartToy";

import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

import CalculateIcon from "@mui/icons-material/Calculate";

export default function Services() {
  /* This keeps track if the heading is in view or not */
  const [refHeading, inViewHeading] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });
  /* This keeps track if the heading is in view or not */

  /* This keeps track if the paragraph is in view or not */
  const [refParagraph, inViewParagraph] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });
  /* This keeps track if the paragraph is in view or not */

  return (
    <div className="bg-[#0a192f] px-6 pb-4" id="Service">
      <div className="flex flex-col items-center">
        <div className="h-8 w-full relative z-10 bg-[#0a192f]"></div>

        <h1
          ref={refHeading}
          className={`bg-gradient-to-r from-[#007aff] to-[#0047af] inline-block text-transparent bg-clip-text text-4xl text-center font-bold ${
            inViewHeading ? "translate-y-0" : "-translate-y-[130%]"
          } duration-1000 `}
        >
          What We Do?
        </h1>

        <p
          ref={refParagraph}
          className={`text-white text-base my-4 text-justify md:text-lg ${
            inViewParagraph ? "translate-x-0" : "-translate-x-10 delay-1000"
          } duration-1000 `}
        >
          We are passionate about harnessing the power of Artificial
          Intelligence and Mobile App Development to bring innovative solutions
          to life. Our focus is on crafting cutting-edge AI software products
          and user-friendly mobile applications that cater to a wide range of
          industries. We believe in pushing the boundaries of technology to
          create real-world solutions that make a difference.
        </p>
      </div>

      <div>
        <h1 className=" text-white text-4xl text-left font-bold mt-8 mb-6">
          Core Services
        </h1>

        <div>
          <div className="lg:flex lg:gap-6">
            <div>
              <Category
                icon={
                  <SmartToyIcon sx={{ fontSize: "30px", color: "white" }} />
                }
                heading="AI Software Development"
                paragraph="Our team of experts specialises in developing AI-powered software
            tailored to your unique needs. Whether it's natural language processing,
            computer vision, or machine learning, we have the skills and experience
            to turn your AI vision into reality."
              />
            </div>

            <div>
              <Category
                icon={
                  <SettingsSuggestIcon
                    sx={{ fontSize: "30px", color: "white" }}
                  />
                }
                heading="AI Integration"
                paragraph="We help businesses integrate AI into their existing processes and systems, unlocking new levels of efficiency, data analysis, and automation. Our AI integration solutions are designed to enhance your operations and boost your bottom line."
              />
            </div>
          </div>

          <div className="lg:w-[47.5%]">
            <div>
              <Category
                icon={
                  <CalculateIcon sx={{ fontSize: "30px", color: "white" }} />
                }
                heading="Consulting and Strategy"
                paragraph="We offer strategic AI and mobile app consulting services to help you understand the possibilities and potential of AI and mobile technology for your business. Whether it's market research, product ideation, or AI adoption strategies, we're here to guide you."
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
