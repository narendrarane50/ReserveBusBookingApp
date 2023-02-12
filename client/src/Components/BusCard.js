import React from "react";
import Seat from "./Seat";

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
    duration-500"
            onClick={() =>
              props.busNo === props.showBus
                ? props.setShowBus("")
                : props.setShowBus(props.busNo)
            }
          >
            View Seat
          </button>
        </div>
      </div>
      {props.showBus === props.busNo && (
        <div className="border-2 rounded-md ">
          <div className="m-2 flex">
            <div className="basis-4/5 text-start">
              <div className="font-bold text-2xl ">Select Seats</div>
              <div className="flex my-4">
                <div className="text-gray-400">Seat Price</div>
                <div className="border-2 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                  />
                  <span className="text-sm ">All</span>
                </div>
                <div className="border-2 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                  />
                  <span className="text-sm ">&#8377;699</span>
                </div>
                <div className="border-2 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                  />
                  <span className="text-sm ">&#8377;899</span>
                </div>
                <div className="border-2 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                  />
                  <span className="text-sm ">&#8377;1199</span>
                </div>
                <div className="border-2 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                  />
                  <span className="text-sm ">&#8377;1599</span>
                </div>
              </div>
            </div>
            <div className="basis-1/5 text-start text-gray-600">
              <div className="">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Vacant Seats</span>
              </div>
              <div className="">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Reserved Seats</span>
              </div>
              <div className="">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Selected Seats</span>
              </div>
            </div>
          </div>
          <div className="flex m-2 ">
            <div className="basis-2/3  mr-2 ">
              <div className="border-2 mb-4 h-36 flex rounded-md">
                <div
                  className="rotate-180 text-gray-400 mt-2 text-xs"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span>Upper Birth</span>
                </div>
                <div className="mt-3 ml-4">
                  <div className="flex">
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                  </div>
                  <div className="flex mb-12">
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                  </div>
                  <div className="flex mb-2 ml-40">
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                  </div>
                </div>
              </div>
              <div className="border-2 h-36 flex rounded-md">
                <div
                  className="rotate-180 text-gray-400 mt-2 text-xs"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span>Lower Birth</span>
                </div>
                <div className="mt-3 ml-4">
                  <div className="flex">
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                  </div>
                  <div className="flex mb-12">
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                  </div>
                  <div className="flex mb-2 ml-40">
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                    <Seat />
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/3 border-2 rounded-md">
              <div className="my-2 mx-3 text-start">
                <div className="font-bold text-md">Boarding and Dropping</div>
                <div className="flex justify-between my-2">
                  <div className="text-xs">
                    <div className="font-semibold">-Pune</div>
                    <div className="text-gray-400">
                      Taxi Service, Chhatrapati road
                    </div>
                  </div>
                  <div className="text-sm font-bold">22:45</div>
                </div>
                <div className="flex justify-between mt-2 border-b-2 pb-2 pt-2">
                  <div className="text-xs ">
                    <div className="font-semibold">-Kolkata</div>
                    <div className="text-gray-400">
                      Taxi Service, Chhatrapati road
                    </div>
                  </div>
                  <div className="text-sm font-bold">08:20</div>
                </div>
                <div className="flex justify-between text-sm font-bold border-b-2 py-1">
                  <div>Seat No</div>
                  <div>07</div>
                </div>
                <div className="text-sm font-bold py-1">Fare Details</div>
                <div className="flex justify-between my-1">
                  <div>
                    <div className="text-xs">Amount</div>
                    <div className="text-xs text-gray-400">
                      Taxi Service, Chhatrapati road
                    </div>
                  </div>
                  <div className="text-md font-bold">INR 750.00</div>
                </div>
                <div>
                  <button
                    className="bg-[#FF8700] text-white font-[Poppins] mt-6 py-2 px-8 w-full rounded  hover:bg-indigo-400 
    duration-500"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusCard;
