import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between space-x-2 items-center font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <img
            src="https://www.shutterstock.com/image-vector/vector-logo-m-260nw-421257313.jpg"
            alt=""
            className="rounded-full h-20 w-20 object-cover"
          />
        </Link>
        <h1>Mohsin zia</h1>
      </div>
      <div>
        <Link
          href=""
          className="px-5 py-3 md:text-base  bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Sanity Blog build by Mohsin zia
        </Link>
      </div>
    </div>
  );
};

export default Header;
