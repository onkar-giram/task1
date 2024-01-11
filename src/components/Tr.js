import arabianRanches from "../asset/arabian-ranches.jpg";
import arabianRanches2 from "../asset/arabian-ranches-ii.jpg";
import downtownDubai from "../asset/downtown-dubai.jpg";
import dubaiHillsEstate from "../asset/dubai-hills-estate.jpg";
import dubaiMarina from "../asset/dubai-marina.png";
import emiratesLiving from "../asset/emirates-living.jpg";
import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const images = [
  { src: arabianRanches, text: "ARABIAN RANCHES" },
  { src: arabianRanches2, text: "ARABAIN RANCHES II" },
  { src: downtownDubai, text: "DOWNTOWN DUBAI" },
  { src: dubaiHillsEstate, text: "DUBAI HILLS ESTATE" },
  { src: dubaiMarina, text: "DUBAI MARINA" },
  { src: emiratesLiving, text: "EMIRATES LIVING" },
];

const Tr = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className="relative overflow-hidden sm:w-[1300px] w-[250px]  mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className=" relative">
              <div className=" my-10 md:mx-5 md:my-5 rounded shadow-lg">
                <img
                  className=" w-[250px] h-[335px] md:w-[391px] md:h-[552px] object-cover"
                  src={image.src}
                />
              </div>
              <div className=" absolute left-10 right-10 bottom-10 text-white">
                <p className="relative leading-8 mb-5 martel-sans-ud md:text-[28px] md:font-semibold">
                  {image.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <button
          className="invisible md:visible  h-[53px] w-[57px] absolute -left-4 top-1/2 transform -translate-y-1/2 bg-[#F6F6F6] text-[#64615B]   shadow-xl"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className="invisible md:visible h-[53px] w-[57px] absolute -right-3 top-1/2 transform -translate-y-1/2 bg-[#F6F6F6] text-[#64615B]  shadow-xl "
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default Tr;
