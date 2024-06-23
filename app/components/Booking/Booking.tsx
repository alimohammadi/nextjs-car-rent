"use client";

import React, { useState } from "react";
import AutocompleteAddress from "./AutocompleteAddress";
import Cars from "./Cars";

const Booking = () => {
  const [screenHeight] = useState(() => window.innerHeight * 0.72);

  return (
    <div>
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div
        className="border-[1px] p-5 rounded-md"
        style={{ height: screenHeight }}
      >
        <AutocompleteAddress />
        <Cars />
      </div>
    </div>
  );
};

export default Booking;
