import React from "react";
import EmToPxCard from "./EmToPxCard";
import EmToPxTable from "./EmToPxTable";

function EmToPx() {
  return (
    <div>
      <EmToPxCard />
      <EmToPxTable />
      <div className="max-w-3xl px-4 mx-auto my-11">
        <h1 className="text-2xl text-primary font-semibold">
          How to Convert EM to PX
        </h1>
        <p className="mt-3 px-6 py-5 bg-secondary text-white font-medium ">
          px = em * font-size
        </p>
       
      </div>
    </div>
  );
}

export default EmToPx;
