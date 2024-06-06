import React from "react";

const Activity = ({ component, heading, subheading }) => {
  return (
    <>
      <div className=" w-11/12 p-4 my-3 md:w-3/12 m-auto rounded-lg md: mx-5 bg-gray-100 ">
        <div className="rounded-full p-4 w-fit text-white bg-primary">
          {component}
        </div>
        <h2 className="text-xl font-semibold mt-2">{heading} </h2>
        <p className="text-lg">{subheading}</p>
      </div>
    </>
  );
};

export default Activity;
