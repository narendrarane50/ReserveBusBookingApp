import React from "react";
import BusInfoCard from "./BusInfoCard";

const BookingConfirmCard = () => {
  return (
    <div className="mx-64 border-4 rounded-md">
      <div className="text-[#1FC84D] text-6xl mt-4">
        <ion-icon name="checkmark-circle-outline"></ion-icon>
      </div>
      <div className="font-bold text-2xl pb-4">Booking has been confirmed</div>
      <div className="flex justify-center text-slate-600">
        <div className="text-right mx-2">
          <div className="mb-2">Ticket ID:</div>
          <div className="mb-2">Payment ID:</div>
          <div className="mb-2">Passenger Details:</div>
          <div className="mb-2">Contact Details:</div>
        </div>
        <div className="text-left mx-2">
          <div className="mb-2">56UHRFT</div>
          <div className="mb-2">2545-326E3-7HHH</div>
          <div className="mb-2">Megha Agrawal, F, 25 yrs</div>
          <div className="mb-2">9121999999</div>
        </div>
      </div> 
      <div className="mx-16 my-8">
        <BusInfoCard />
      </div>
    </div>
  );
};

export default BookingConfirmCard;
