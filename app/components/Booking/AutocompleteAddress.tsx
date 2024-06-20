import React from "react";

const AutocompleteAddress = () => {
  return (
    <div>
      <div>
        <label className="text-gray-400 text-[13px]">Where From?</label>
        <input
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300 text-[14px]"
          // value={source}
          // onChange={(e) => {
          //   setSource(e.target.value);
          //   setSourceChange(true);
          // }}
        />
      </div>

      <div>
        <label className="text-gray-400 text-[13px]">Where To?</label>
        <input
          type="text"
          className="bg-white p-1 
                border-[1px] w-full 
                rounded-md outline-none
                focus:border-yellow-300 text-[14px]"
          // value={destination}
          // onChange={(e) => {
          //   setDistination(e.target.value);
          //   setDestinationChange(true);
          // }}
        />
      </div>
    </div>
  );
};

export default AutocompleteAddress;
