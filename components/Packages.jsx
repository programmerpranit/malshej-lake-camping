import React from "react";

const Packages = () => {
  return (
    <>
      <img src="/images/black_cutout.png" alt="" />
      <div className="w-full text-white bg-dark p-5 text-center">
        <h2 className="text-4xl text-primary-light my-3 font-bold">Packages</h2>

        <div className="flex  flex-col md:flex-row justify-evenly max-w-screen-lg m-auto">
          <div className="mt-8 md:w-1/2">
            <h3 className="text-xl mb-2 font-semibold">Regular Tent</h3>
            <p> Rs. 1500 /- per Person</p>
            <p>Blankets, Rug, Semi water proof.</p>
          </div>

          <div className="mt-8 md:w-1/2">
            <h3 className="text-xl mb-2 font-semibold">Deluxe tent</h3>
            <p>Rs. 2100/- Per Person</p>
            <p>
              Charging point, mattress, light, gallery, 6 Feet height from
              ground, fully waterproof
            </p>
          </div>
        </div>

        <h3 className="text-xl my-10">Check In: 4pm Check Out: 11am</h3>

        <p className="my-10 text-center ">
          To confirm booking pay 50% in advance and remaining on campsite while
          check- in no charge for childrens below 7yrs.
        </p>
      </div>
      <img src="/images/black_cutout_down.png" alt="" />
    </>
  );
};

export default Packages;
