import React from "react";
import Image from "next/image";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex justify-center items-center space-x-2">
      <img
        src="https://www.shutterstock.com/image-vector/vector-logo-m-260nw-421257313.jpg"
        alt=""
        className="rounded-full h-20 w-20 object-cover"
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default Logo;
