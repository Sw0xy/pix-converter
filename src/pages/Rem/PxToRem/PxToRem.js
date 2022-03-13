import React from "react";
import PxToRemCard from "./PxToRemCard";
import PxToRemTable from "./PxToRemTable";

function PxToRem() {
  return (
    <>
      <PxToRemCard />
      <PxToRemTable />
      <div className="max-w-3xl px-4 mx-auto my-11">
        <h1 className="text-2xl text-primary font-semibold">
          How to Convert PX to REM
        </h1>
        <p className="mt-3 px-6 py-5 bg-secondary text-white font-medium ">
          rem = px / base font size
        </p>
        
      </div>
    </>
  );
}

export default PxToRem;
