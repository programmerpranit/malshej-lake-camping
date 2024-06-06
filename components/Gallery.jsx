import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const Gallery = () => {
  const images = [
    {
      src: "/images/mlc0.jpg",
    },
    {
      src: "/images/mlc1.jpg",
    },
    {
      src: "/images/mlc2.jpg",
    },
    {
      src: "/images/mlc3.jpg",
    },
  ];
  return (
    <>
      <div className="my-10">
        <h2 className="text-4xl text-primary my-3 text-center font-bold">
          Gallery
        </h2>

        <div className="md:max-w-screen-lg md:h-screen m-auto w-10/12">
          <Carousel
            images={images}
            hasSizeButton={false}
            hasIndexBoard={false}
            playIcon={null}
            pauseIcon={null}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
