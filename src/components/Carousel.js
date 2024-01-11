import React, { useEffect, useState } from "react";
import arabianRanches from "../asset/arabian-ranches.jpg";
import arabianRanches2 from "../asset/arabian-ranches-ii.jpg";
import downtownDubai from "../asset/downtown-dubai.jpg";
import dubaiHillsEstate from "../asset/dubai-hills-estate.jpg";
import dubaiMarina from "../asset/dubai-marina.png";
import emiratesLiving from "../asset/emirates-living.jpg";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    arabianRanches,
    arabianRanches2,
    downtownDubai,
    dubaiHillsEstate,
    dubaiMarina,
    emiratesLiving,
  ];

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % images.length;
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(prevIndex);
  };

  console.log(currentSlide);

  return (
    <>
      <div className="flex justify-center mt-5">
        <div className=" flex flex-wrap justify-center mt-5">
          <div className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px]    my-10 md:mx-5   md:my-5 rounded shadow-lg">
            <img
              className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px]  object-cover "
              src={images[currentSlide]}
            />
          </div>

          <div className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px]    my-10 md:mx-5   md:my-5 rounded shadow-lg">
            <img
              className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px]  object-cover "
              src={currentSlide != 5 ? images[currentSlide + 1] : images[0]}
            />
          </div>

          <div className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px]    my-10 md:mx-5   md:my-5 rounded shadow-lg">
            <img
              className=" w-[320px] h-[472px] md:w-[391px] md:h-[552px]  object-cover "
              src={currentSlide != 5 ? images[currentSlide + 2] : images[1]}
            />
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute  mt-0 md:left-[50px] z-10 p-2"
        >
          ?{" "}
        </button>
        <button
          onClick={nextSlide}
          className="absolute  mt-0 md:right-[50px] z-10 p-2"
        >
          ?{" "}
        </button>
      </div>
    </>
  );
}
