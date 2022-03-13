import React from "react";
import { Link } from "react-router-dom";
function CardList() {
  return (
    <div className="px-1 md:px-6 flex flex-col  justify-center">
      <div className="mt-8">
        <h1 className="font-bold text-primary text-3xl underline mb-4 ml-4">
          REM
        </h1>
        <div className="flex items-center justify-around text-center">
          <Link
            to={`/px-to-rem`}
            className="text-sm md:text-lg w-full py-4 bg-card border-[0.0625rem] 
          border-secondary rounded-xl  text-gray-200 mx-2 md:mx hover:text-primary font-semibold"
          >
            Px to Rem
          </Link>
          <Link
            to={`/rem-to-px`}
            className="text-sm md:text-lg w-full mx-2 md:mx-7 py-4  bg-card border-[0.0625rem] 
          border-secondary rounded-xl  text-gray-200 hover:text-primary font-semibold"
          >
            Rem to Px
          </Link>
        </div>
      </div>


      <div className="mt-8">
        <h1 className="font-bold text-primary text-3xl underline mb-4 ml-4">
          Em
        </h1>
        <div className="flex items-center justify-around text-center">
          <Link
            to={`/em-to-px`}
            className="text-sm md:text-lg w-full py-4 bg-card border-[0.0625rem] 
          border-secondary rounded-xl  text-gray-200 mx-2 md:mx hover:text-primary font-semibold"
          >
            Em to Px
          </Link>
          <Link
            to={`/px-to-em`}
            className="text-sm md:text-lg w-full mx-2 md:mx-7 py-4  bg-card border-[0.0625rem] 
          border-secondary rounded-xl  text-gray-200 hover:text-primary font-semibold"
          >
            Px to Em
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardList;
