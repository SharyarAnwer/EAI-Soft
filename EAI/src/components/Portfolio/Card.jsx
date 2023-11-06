import React from "react";

import { useInView } from "react-intersection-observer";

export default function Card(prop) {
  const [refCard, inViewCard] = useInView({
    triggerOnce: false,
    rootMargin: "0px 0px",
  });

  return (
    <div className="py-6">
        <div
          ref={refCard}
          className={`w-80 bg-white rounded-lg overflow-hidden ${
            inViewCard
              ? "translate-y-0 opacity-100"
              : "-translate-y-8 opacity-0"
          } duration-700 shadow-lg`}
        >
          <img
            src={prop.link}
            alt="First work"
            className="w-full aspect-square rounded-t-lg"
          />

          <h1 className="text-black text-lg py-3 text-center">{prop.desc}</h1>
        </div>
    </div>
  );
}
