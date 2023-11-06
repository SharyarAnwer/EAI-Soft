import React from "react";

import Section from "./section";

export default function AboutUs() {
  return (
    <div
      className="p-6 flex flex-col lg:flex-row items-center lg:items-start justify-center bg-[#0a192f] lg:gap-8 "
      id="About"
    >
      <div className="lg:max-w-[50%] bg-[#0a192f] relative z-10">
        <div className="flex flex-col ">
          <h1 className="text-3xl font-bold my-4 text-left leading-tight lg:leading-snug xl:max-w-[75%] text-white">
            Meet the Minds Behind the Magic
          </h1>

          <p className="text-base md:text-lg  text-white text-justify mb-8">
            Our journey began with a vision to harness the power of artificial
            intelligence and mobile technology to shape a brighter future.
            Founded in 2023, we've consistently pushed the boundaries of
            innovation, striving to make the world a smarter, more connected
            place. Our commitment to cutting-edge AI software products and
            mobile apps has allowed us to create solutions that are not only
            technologically advanced but also incredibly user-friendly. Our
            journey has been one of unrelenting exploration, and we are thrilled
            to be a part of this amazing journey.
          </p>
        </div>

        <img
          alt=""
          loading="lazy"
          width="1344"
          height="1104"
          decoding="async"
          data-nimg="1"
          class="mt-16 md:mt-0 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto"
          srcset="https://eaisoft.com/_next/image?url=%2Fassets%2Fother-ai-images%2Fflat-illustration-artificial-intelligence_979520-2299.avif&w=1920&q=75 1x, https://eaisoft.com/_next/image?url=%2Fassets%2Fother-ai-images%2Fflat-illustration-artificial-intelligence_979520-2299.avif&amp;w=3840&amp;q=75 2x"
          src="https://eaisoft.com/_next/image?url=%2Fassets%2Fother-ai-images%2Fflat-illustration-artificial-intelligence_979520-2299.avif&w=3840&q=75"
          style={{ color: "transparent" }}
        ></img>
      </div>

      <div>
        <Section
          heading="Vision"
          paragraph="To lead the charge in AI-driven innovation, transforming industries,
          and empowering individuals by delivering cutting-edge solutions that
          solve problems, disrupt the conventional market, and shape a future
          where technology enhances the human experience."
        />

        <Section
          heading="Mission"
          paragraph="Our mission is to harness the transformative power of artificial intelligence to create products that inspire change, solve real-world problems, and set new standards. We are dedicated to pushing the boundaries of what's possible, collaborating with visionary partners, and investing in the development of intelligent software that enhances the quality of life. By constantly innovating, valuing ethical practices, and driving advancements in AI technology, we aim to be at the forefront of this digital revolution, providing innovative solutions that redefine industries, empower individuals, and usher in a new era of unprecedented possibilities."
        />

        <Section
          heading="Team"
          paragraph="Our team at Eaisoft is a blend of creative minds, technical wizards, and strategic thinkers. With a collective passion for technology and innovation, we've brought together a group of professionals who thrive on challenges and constantly push the envelope of what's possible."
        />
      </div>
    </div>
  );
}
