import React from "react";

const Card = (props) => {
  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg w-[50vh] mx-7 my-5 drop-shadow-md md:my-1">
        <img
          class="w-full"
          src="https://media.gettyimages.com/id/136521748/photo/bus.jpg?s=612x612&w=gi&k=20&c=kvCDrxgMqJmY2AiUMqH2TW7nApUNmXyvD-cuWZE7dCs="
          alt="bus"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{props.title}</div>
          <p class="text-gray-700 text-base">
            {props.description}
          </p>
        </div>
        {/* <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
