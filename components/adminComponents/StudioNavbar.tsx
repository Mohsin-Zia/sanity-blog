import React from "react";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex justify-between p-5 items-center">
        <Link
          href="/"
          className="text-[#F7AB0A] text-sm cursor-pointer flex items-center"
        >
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2 " />
          Go TO Website
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#F7AB0A]">
          <h1 className="font-bold text-white">
            welcome to sanity build by Mohsin zia ! my website link :
          </h1>

          <Link
            href="https://www.papareact.com/universityofcode"
            className="text-[#F7AB0A] font-bold ml-2"
          >
            www.mohsinzia.site
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
