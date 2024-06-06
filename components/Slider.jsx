import Image from "next/image";
import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import { MdNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const Slider = () => {
  const [slide, setSlide] = useState(0);

  const images = ["slider1", "slider1", "slider1"];

  const prevBtn = () => {
    if (slide >= 1) {
      setSlide(slide - 1);
    } else {
      setSlide(images.length - 1);
    }
  };

  const nextBtn = () => {
    if (slide < images.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextBtn();
      console.log("call");
    }, 4000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="relative h-full bg-black">
        <div
          className={`${
            slide == 0 ? "" : "hidden"
          } bg-cover flex flex-col justify-center items-center h-full bg-no-repeat !bg-opacity-25 bg-[url(../public/images/mlc0.jpg)]`}
        >
          <SliderContent />
        </div>
        <div
          className={`${
            slide == 1 ? "" : "hidden"
          } bg-cover flex flex-col justify-center items-center h-full bg-no-repeat !bg-opacity-25 bg-[url(../public/images/mlc1.jpg)]`}
        >
          <SliderContent />
        </div>
        <div
          className={`${
            slide == 2 ? "" : "hidden"
          } bg-cover flex flex-col justify-center items-center h-full bg-no-repeat !bg-opacity-25 bg-[url(../public/images/mlc3.jpg)]`}
        >
          <SliderContent />
        </div>

        <Image
          src={"/images/slider_bottom.png"}
          className={"absolute bottom-0 md:hidden"}
          alt={"bottom"}
          width={500}
          height={200}
        />

        <div className="flex justify-between absolute px-5 top-1/2 w-full text-white z-0">
          <button onClick={prevBtn} className="text-3xl  ">
            <MdNavigateBefore />
          </button>
          <div onClick={nextBtn} className="text-3xl text-white">
            <MdOutlineNavigateNext />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
