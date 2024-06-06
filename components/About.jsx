import Image from "next/image";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="flex my-10 justify-center md:my-20 m-auto max-w-screen-xl max-md:flex-col">
        <div className="img p-10 md:w-1/2  ">
          <Image
            className="m-auto"
            src={"/mlc-logo.jpg"}
            alt={"logo"}
            height={400}
            width={400}
          />
        </div>
        <div className="info md:p-10 md:w-1/2 p-5 bg-contain bg-center bg-no-repeat !bg-opacity-10 ">
          <h2 className="text-4xl text-primary font-bold">
            About <span className="text-grey">Us</span>
          </h2>
          <br />
          <p>
            Welcome to Malshej Lake Camping 🏕, your perfect getaway nestled in
            the serene surroundings of Karanjale, near the picturesque Malshej
            Ghat. Situated in Tal-Junnar, Pune, our campsite offers a unique
            lakeside camping experience with breathtaking views.
          </p>
          <br />
          <p>
            Enjoy seamless connectivity with network availability while
            experiencing the tranquility of nature. We prioritize your safety
            with a meticulously sanitized property and strict social distancing
            measures. With limited entry, we ensure an exclusive and peaceful
            stay. Our commitment to excellence is reflected in our Google
            ratings – 5/5 for the campsite and 4/5 for food. Come and create
            unforgettable memories at Malshej Lake Camping!
          </p>
          <Link href={"/activities"}>
            <button className="bg-primary font-semibold mt-6 text-white px-7 py-2 rounded-full">
              Check Activities
            </button>
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className=" pb-5 text-4xl text-primary text-center">
          Distance From
        </h2>

        <div className="flex justify-around">
          <h4 className="text-xl font-semibold">Mumbai: 160km</h4>
          <h4 className="text-xl font-semibold">Pune: 110km</h4>
          <h4 className="text-xl font-semibold">Nashik: 150km</h4>
        </div>
      </div>
    </>
  );
};

export default About;
