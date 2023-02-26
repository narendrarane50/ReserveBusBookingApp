import React, { useState, useEffect } from "react";
import BusCard from "../Components/BusCard";
import Filters from "../Components/Filters";
import BusData from "../Data/BusData";
import { useSelector } from "react-redux";

const Available_bus_page = () => {
  const [showBus, setShowBus] = useState("");
  const [filteredBus, setFilteredBus] = useState([]);
  const fromTo = useSelector((state) => state.fromTo);

  useEffect(() => {
    const buses = BusData.filter((bus) => {
      return (
        fromTo.INIT_STATE.From === bus.From && fromTo.INIT_STATE.To === bus.To
      );
    });
    setFilteredBus(buses);
  }, []);

  return (
    <div className="flex flex-row ">
      <Filters />
      <div className="basis-3/4 mt-24 mb-5 mr-5">
        {filteredBus.map((bus, id) => (
          <BusCard
            key={id}
            busid={bus.id}
            busName={bus.BusName}
            busRating={bus.Rating}
            busFrom={bus.From}
            busTo={bus.To}
            busFromDate={bus.FromDate}
            busFromTime={bus.FromTime}
            busToDate={bus.ToDate}
            busToTime={bus.ToTime}
            busTimeInterval={bus.TimeInterval}
            busSeatsUpper={bus.seatsUpper}
            busSeatsLower={bus.seatsLower}
            showBus={showBus}
            setShowBus={setShowBus}
          />
        ))}
      </div>
    </div>
  );
};

export default Available_bus_page;
