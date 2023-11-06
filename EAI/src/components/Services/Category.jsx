import React from "react";

import { useInView } from "react-intersection-observer";

export default function Category(prop) {
  /* This keeps track if the paragraph is in view or not */
  const [refSection, inViewSection] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });
  /* This keeps track if the paragraph is in view or not */

  return (
    <div
      ref={refSection}
      className={`mb-12 ${
        inViewSection
          ? "-translate-y-0 opacity-100"
          : "-translate-y-8 opacity-0"
      } duration-1000`}
    >
      <div className="w-10 aspect-square bg-[#0047af] flex items-center justify-center rounded-lg">
        {prop.icon}
      </div>

      <h1 className="text-white text-xl text-left font-semibold mt-4">
        {prop.heading}
      </h1>

      <p className="text-white text-base my-4 text-justify md:text-lg">
        {prop.paragraph}
      </p>
    </div>
  );
}
