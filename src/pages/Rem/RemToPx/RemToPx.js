import React from "react";
import RemToPxCard from "./RemToPxCard";
import RemToPxTable from "./RemToPxTable";

function RemToPx() {
  return (
    <div>
      <RemToPxCard />
      <RemToPxTable />
      <div className="max-w-3xl px-4 mx-auto my-11">
        <h1 className="text-2xl text-primary font-semibold">
          Rem to Px Formula
        </h1>
        <p className="mt-3 px-6 py-5 bg-secondary text-white font-medium ">
          px = rem * root font-size
        </p>
      </div>
    </div>
  );
}

export default RemToPx;
