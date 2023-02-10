import React from "react";

const Filters = () => {
  return (
    <div className="basis-1/4   mt-20 mb-5 mx-5">
      <div className="flex justify-between border-2 py-3 px-4 font-bold mb-2 rounded-md">
        <div>Filter</div>
        <div>Clear All</div>
      </div>
      <div className="border-2 rounded-md">
        <div className=" py-3 px-4 text-start">
          <div className="py-2 font-bold">Departure Time</div>
          <div className="py-2">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Morning Session</span>
          </div>
          <div className="py-2">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Afternoon Session</span>
          </div>
          <div className="py-2">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Evening Session</span>
          </div>
        </div>
        <hr className="border-2" />
        <div className="py-3 px-4 text-start">
          <div className="py-2 font-bold">Arrival Time</div>
          <div className="py-2">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Morning Session</span>
          </div>
          <div className="py-2">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Afternoon Session</span>
          </div>
          <div className="py-2">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Evening Session</span>
          </div>
        </div>
        <hr className="border-2" />
        <div className="py-3 px-4 text-start">
          <div className="py-2 font-bold">Pickup Point</div>
          <div className="py-2">
            <input className="mr-2 leading-tight" name="pickup" type="radio" />
            <span className="text-sm">Kolkata</span>
          </div>
          <div className="py-2">
            <input className="mr-2 leading-tight" name="pickup" type="radio" />
            <span className="text-sm">Mumbai</span>
          </div>
          <div className="py-2">
            <input className="mr-2 leading-tight" name="pickup" type="radio" />
            <span className="text-sm">Banglore</span>
          </div>
        </div>
        <hr className="border-2" />
        <div className="py-3 px-4 text-start">
          <div className="py-2 font-bold">Drop Point</div>
          <div className="py-2">
            <input className="mr-2 leading-tight" name="drop" type="radio" />
            <span className="text-sm">Kolkata</span>
          </div>
          <div className="py-2">
            <input className="mr-2 leading-tight" name="drop" type="radio" />
            <span className="text-sm">Mumbai</span>
          </div>
          <div className="py-2">
            <input className="mr-2 leading-tight" name="drop" type="radio" />
            <span className="text-sm">Banglore</span>
          </div>
        </div>
        <hr className="border-2" />
        <div className="py-3 px-4 text-start">
          <div className="py-2 font-bold">Bus Rating</div>
          <div className="py-2">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">4 star or more</span>
          </div>
          <div className="py-2">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">3 star or more</span>
          </div>
          <div className="py-2">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">0-2 star</span>
          </div>
        </div>
        <hr className="border-2" />
        <div className="py-3 px-4 text-start">
          <div className="py-2 font-bold">Bus Operator</div>
          <div className="py-2">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Zing Bus</span>
          </div>
          <div className="py-2">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Intercity Smart</span>
          </div>
          <div className="py-2">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Safar Exp</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
