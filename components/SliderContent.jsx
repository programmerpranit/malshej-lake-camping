import Link from "next/link";
import React from "react";

const SliderContent = () => {
  return (
    <>
      <h2 className="text-white font-bold text-5xl px-10 leading-snug text-center">
        Malshej Lake Camping
      </h2>

      <p className="text-xl text-white text-center px-10  mt-5">
        Adventure | Camping | Lakeside
      </p>

      <a href="tel:8686963434">
        <button className="bg-primary font-semibold mt-6 text-white px-7 py-2 rounded-full">
          Call Now
        </button>
      </a>
    </>
  );
};

export default SliderContent;
