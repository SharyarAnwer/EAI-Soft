import React from "react";

import { useInView } from "react-intersection-observer";

export default function Section(prop) {
  const [refSection, inViewSection] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });

  return (
    <div className="mt-10 lg:mt-6">
      <div
        ref={refSection}
        className={`text-white pb-6 border-b-2 ${
          inViewSection
            ? "translate-x-0 "
            : "-translate-x-full"
        } duration-700`}
      >
        <h3 className="text-lg font-semibold md:font-bold">{prop.heading}</h3>

        <p className="text-base md:text-lg mt-2">{prop.paragraph}</p>
      </div>
    </div>
  );
}
