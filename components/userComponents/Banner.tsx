import React from "react";

const Banner = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl">Mohsin's Daily Blog </h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#F7AB0A]">
            Every Developers
          </span>{" "}
          favourite blog in the Deveosphare
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        {" "}
        New product Features | The latest in Technology | debugging | nightmares
        & more
      </p>
    </div>
  );
};

export default Banner;
