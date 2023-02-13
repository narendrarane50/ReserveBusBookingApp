import React, { useState } from "react";

const Seat = () => {
  const [selectSeat, setSelectSeat] = useState(false);
  const [bgColor, setbgColor] = useState("");

  let ChangeColor = () => {
    if (selectSeat === false) {
      setSelectSeat(true);
      setbgColor("#0272F8");
    } else {
      setSelectSeat(false);
      setbgColor("");
    }
  };
  return (
    <div>
      <button
        className="border-2 border-gray-300 w-14 h-5 rounded-sm mx-3 hover:bg-slate-300"
        style={{ background: bgColor }}
        onClick={ChangeColor}
      ></button>
    </div>
  );
};

export default Seat;
