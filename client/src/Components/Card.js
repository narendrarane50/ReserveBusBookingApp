import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg w-[50vh] mx-7 my-5 drop-shadow-md md:my-1">
        <img
          className="w-full"
          src="https://media.gettyimages.com/id/136521748/photo/bus.jpg?s=612x612&w=gi&k=20&c=kvCDrxgMqJmY2AiUMqH2TW7nApUNmXyvD-cuWZE7dCs="
          alt="bus"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
