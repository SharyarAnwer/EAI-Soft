import React from "react";

import Card from "./Card";

export default function Portfolio() {
  const works = [
    {
      link: "https://res.cloudinary.com/dx3u24xir/image/upload/f_auto,q_auto/v1692709219/Portfolio/Portfolio-works/social-media/02-08_kdwi2h.webp",
      desc: "A short description for first project",
    },
    {
      link: "https://res.cloudinary.com/dx3u24xir/image/upload/f_auto,q_auto/v1692709214/Portfolio/Portfolio-works/social-media/peanut_butter_post_16_August_2023_jczbdh.webp",
      desc: "A short description for second project",
    },
    {
      link: "https://res.cloudinary.com/dx3u24xir/image/upload/f_auto,q_auto/v1692709214/Portfolio/Portfolio-works/social-media/Snapinsta.app_361626029_630831795823880_7524686094997021606_n_1080_n7ktdz.webp",
      desc: "A short description for third project",
    },
    {
      link: "https://res.cloudinary.com/dx3u24xir/image/upload/f_auto,q_auto/v1692709217/Portfolio/Portfolio-works/social-media/target_identify_-_interac8-01_bqzvz8.webp",
      desc: "A short description for fourth project",
    },
    {
      link: "https://res.cloudinary.com/dx3u24xir/image/upload/f_auto,q_auto/v1692709216/Portfolio/Portfolio-works/social-media/why_website_maintanace_is_important_u7dsch.webp",
      desc: "A short description for fifth project",
    },
    {
      link: "https://res.cloudinary.com/dx3u24xir/image/upload/f_auto,q_auto/v1692709215/Portfolio/Portfolio-works/social-media/we_treat_your_websites_sjv2hp.webp",
      desc: "A short description for sixth project",
    },
    {
      link: "https://res.cloudinary.com/dx3u24xir/image/upload/f_auto,q_auto/v1692709215/Portfolio/Portfolio-works/social-media/Snapinsta.app_365243953_633883132185413_1793496713721451427_n_1080_lmgaii.webp",
      desc: "A short description for seventh project",
    },
    {
      link: "https://res.cloudinary.com/dx3u24xir/image/upload/f_auto,q_auto/v1692709214/Portfolio/Portfolio-works/social-media/1_2_1_lysnqi.webp",
      desc: "A short description for eigth project",
    },
  ];

  return (
    <div className="flex flex-wrap bg-[#0a192f] justify-center gap-4" id="Portfolio">
      {works.map((element) => (
        <Card link={element.link} desc={element.desc} />
      ))}
    </div>
  );
}
