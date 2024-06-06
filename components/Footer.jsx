import React from "react";

const Footer = () => {
  return (
    <>
      <div className="p-5 text-center mt-20">
        <h2 className="text-4xl my-5 text-center text-primary font-bold">
          Contact <span className="text-grey">Us</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-around max-w-7xl mx-auto">
          <div className="flex flex-col text-center mt-5 md:w-1/3">
            <a href="tel:+918686963434">
              <h3 className="text-grey font-semibold text-lg">86869 63434</h3>
            </a>

            <a href="https://wa.me/918686963434">
              <button className="bg-primary  font-semibold mt-6 text-white px-7 py-2 rounded-full">
                Whatsapp
              </button>
            </a>
          </div>
          <div className="flex flex-col text-center mt-5 md:w-1/3">
            <p className=" font-bold text-xl ">Email</p>
            <h3 className="text-grey font-semibold text-lg">
              mauliagrotourism17@gmail.com
            </h3>
          </div>
          <div className="flex flex-col text-center mt-5 md:w-1/3">
            <p className=" font-bold text-xl ">Address</p>
            <h3 className="text-grey font-semibold text-md">
              Karanjale, Near Malshej Ghat, Tal- Junnar, Dist- Pune- 412 409
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
