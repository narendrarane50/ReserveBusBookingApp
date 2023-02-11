import React from "react";


const BusCard = (props) => {
    

  return (
    <div className="mb-4">
    <div className="border-2 flex rounded-md ">
      <div className="basis-3/4 border-r-2 text-left p-4">
        <div className="flex ">
          <div className="font-bold">
            <span className="text-xl">InterCity Smart Bus </span>
            <span className="bg-[#119513] rounded-md text-white p-0.5 ml-2">
              <ion-icon name="star-outline"></ion-icon>4.5
            </span>
            <span className="px-2 text-gray-400 text-xs">Ratings</span>
          </div>
        </div>
        <div className="flex py-2 text-xs text-slate-500">
          <div>
            <span className="border-r pr-2 border-slate-600">
              AC Sleeper (2-1)
            </span>
          </div>
          <div>
            <span className="border-r px-2 border-slate-600">
              24 seats left
            </span>
          </div>
          <div>
            <span className="px-2">0 windows seat</span>
          </div>
        </div>
        <div className="flex py-2 ">
          <div>
            <span className=" pr-2 text-lg font-semibold">22:45, 16 NOV</span>
          </div>
          <div>
            <span className="px-2 text-s text-slate-500 text-center align-middle">
              ----------07 hrs 59 mins---------
            </span>
          </div>
          <div>
            <span className="px-2 text-lg font-semibold">6:20, 17 NOV</span>
          </div>
        </div>
        <div className="flex text-blue-700 pt-8">
          <div>Live Tracking</div>
          <div className="pl-8">Policies</div>
          <div className="pl-8">Photos</div>
          <div className="pl-8">Amenities</div>
          <div className="pl-8">Reviews</div>
        </div>
      </div>

      <div className="basis-1/4 p-4">
        <div className="text-md font-semibold">Trip Cost</div>
        <div className="pt-3 text-xs text-gray-500">Starting from</div>
        <div className="font-bold text-2xl">&#8377; 899</div>
        <button
          className="bg-[#FF8700] text-white font-[Poppins] mt-3 py-2 px-8 rounded  hover:bg-indigo-400 
    duration-500" onClick={()=>(props.busNo===props.showBus)?(props.setShowBus('')):(props.setShowBus(props.busNo))}
        >
          View Seat
        </button>
      </div>
    </div>
    {props.showBus===props.busNo && <div className="h-10 border-2 rounded-md">
        <div>Hello world</div>
    </div>}
    </div>
  );
};

export default BusCard;
