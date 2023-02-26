import React, { useState } from "react";

const Seat = ({
  seatno,
  setSelectedSeat,
  setFilterPrice,
  price,
  radioPriceFilter,
}) => {
  const [selectSeat, setSelectSeat] = useState(false);
  const [bgColor, setbgColor] = useState("");

  let ChangeColor = () => {
    if (radioPriceFilter === "All" || radioPriceFilter === price) {
      if (selectSeat === false) {
        setSelectSeat(true);
        setbgColor("#0272F8");
        setSelectedSeat(seatno);
        setFilterPrice(price);
      } else {
        setSelectSeat(false);
        setbgColor("");
        setSelectedSeat("");
        setFilterPrice("");
      }
    }
  };
  return (
    <div>
      <button
        className={`border-2 ${
          radioPriceFilter === "All" || radioPriceFilter === price
            ? "border-gray-400"
            : "border-gray-200"
        } w-14 h-5 rounded-sm mx-3 hover:bg-slate-300`}
        style={{ background: bgColor }}
        onClick={ChangeColor}
      ></button>
    </div>
  );
};

export default Seat;
