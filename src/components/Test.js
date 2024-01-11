import React, { useState } from "react";
import arabianRanches from "../asset/arabian-ranches.jpg";
import arabianRanches2 from "../asset/arabian-ranches-ii.jpg";
import downtownDubai from "../asset/downtown-dubai.jpg";
import dubaiHillsEstate from "../asset/dubai-hills-estate.jpg";
import dubaiMarina from "../asset/dubai-marina.png";
import emiratesLiving from "../asset/emirates-living.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Test() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        className="flex flex-wrap ml-10 lg:mx-[125px]"
        responsive={responsive}
      >
        <div className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px] rounded shadow-lg">
          <img
            className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px]  object-cover "
            src={arabianRanches}
          />
          <div className="absolute md:font-normal text-[22px]  text-[#887C68] text-xl pt-6 md:pt-7  ">
            Arabian Ranches II
          </div>
        </div>

        <div className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px] rounded shadow-lg">
          <img
            className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px]  object-cover "
            src={arabianRanches2}
          />
        </div>

        <div className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px] rounded shadow-lg">
          <img
            className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px]  object-cover "
            src={downtownDubai}
          />
        </div>

        <div className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px] rounded shadow-lg">
          <img
            className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px]  object-cover "
            src={dubaiHillsEstate}
          />
        </div>

        <div className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px] rounded shadow-lg">
          <img
            className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px]  object-cover "
            src={dubaiMarina}
          />
        </div>

        <div className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px] rounded shadow-lg">
          <img
            className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px]  object-cover "
            src={emiratesLiving}
          />
        </div>
      </Carousel>
    </>
  );
}
