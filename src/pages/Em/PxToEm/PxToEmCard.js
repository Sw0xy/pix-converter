import React, {useState} from "react";

function PxToEmCard() {
  const [result, setResult] = useState("");

  const handleConvert = () => {
    const base = document.querySelector('.base-input').value;
    const px = document.querySelector('.px-input').value;
    const em = px / base;
    setResult(em);
  };

  return (
    <div className="mt-11 m-auto max-w-3xl p-3 md:p-6 bg-card rounded-lg w-full border-[0.0625rem] border-secondary">
      <div className="flex flex-wrap sm:flex-row">
        <h2 className="text-primary font-medium text-xl md:text-2xl">Px</h2>
        <h2 className="text-white text-lg md:text-2xl px-2">to</h2>
        <h2 className="text-primary font-medium text-xl md:text-2xl">Em</h2>
        <h2 className="text-white text-lg md:text-2xl px-2">Converter</h2>
      </div>

      <p className="text-opacity-75 mt-2 text-sm md:text-base text-white">
        EM is a measurement unit commonly used in Cascading Style Sheets. It is
        a font-relative unit, which means that it's value is relative to the
        font-size of it's parent element (read more). This PX to EM Converter
        eliminates the hassle of converting pixels (px) to em yourself everytime
        you need to.
      </p>

      <div className="mt-6 flex flex-col md:flex-row items-center">
        <div className=" flex items-center">
          <label className="text-white mx-4">Base</label>
          <input
            type="number"
            className="base-input w-full ring-0 focus:outline-secondary 
            text-md font-medium text-white bg-dark rounded-2xl 
          placeholder-gray-300 p-2 border-2 border-secondary"
            placeholder="Enter Px"
            defaultValue="16"
          />
        </div>

        <div className="flex mt-3 md:mt-0 items-center ">
          <label className="text-white mx-6">Px </label>
          <input
            type="number"
            className="px-input w-full  ring-0 focus:outline-secondary
       text-md font-medium text-white bg-dark rounded-2xl 
       placeholder-gray-300 p-2 border-2 border-secondary"
            placeholder="Enter Px"
          />
        </div>

        <button
          onClick={handleConvert}
          className="w-full cursor-pointer float-right mx-6 md:w-52 mt-6 md:mt-0  px-8 py-2 rounded-xl bg-primary text-white hover:bg-hover active:text-black font-bold">
          Convert
        </button>
      </div>

      <div className="flex mt-3 md:mt-6 items-center ">
        <label className="text-white mx-4">Em</label>
        <input
          type="number"
          value={result}
          className="form-control w-full ring-0
       focus:outline-secondary text-md font-medium 
       text-white bg-dark rounded-2xl 
       placeholder-gray-300 p-2 border-2 border-secondary"
          placeholder="Result"
          readOnly={true}
        />
      </div>
    </div>
  );
}

export default PxToEmCard;
