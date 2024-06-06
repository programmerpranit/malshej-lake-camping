import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex z-50 absolute w-full justify-center items-center flex-col p-4 md:flex-row">
      <Image src={"/mlc-logo.jpg"} width={120} height={120} alt={"Logo"} />
      {/* Logo  */}
      {/* Content  */}
      {/* Button  */}
    </nav>
  );
};

export default Navbar;
