import React, { useState } from "react";
import Card from "../Components/Card";
import RatingCard from "../Components/RatingCard";
import Background from "../images/background.jpg";
import { Link } from "react-router-dom";
import buses from '../images/buses.jpg'
import SearchInput from "../Components/SearchInput";

const Home_Page = (props) => {
  const [val, setVal] = useState("");
  const data = ["Mumbai ", "Pune", "Delhi", "Chennai", "Banglore"];
  return (
    <div>
      <div
        className="bg-cover bg-center h-[120vh]"
        style={{ backgroundImage: `url(${Background}) ` }}
      >
        <div className="flex-col flex items-center">
          <div className="flex flex-col md:flex-row justify-center items-center pt-[15vh] h-[65vh] rounded-xl ">
            <div className="border-2 pr-3 py-4 rounded-l-xl text-left pl-3 bg-white">
              <SearchInput setVal={setVal} data={data} placeholder="From"/>
            </div>
            <div className="border-2 pr-3 py-4 text-left pl-3 bg-white">
              <SearchInput setVal={setVal} data={data} placeholder="To"/>
              
            </div>
            <div className="border-2 pr-3 py-4 pl-3 rounded-r-xl bg-white">
              <input
                type="date"
                className="w-80 form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Travel-Date"
                aria-label="Travel-Date"
                aria-describedby="button-addon2"
              />
            </div>
          </div>
          <button className="text-white bg-[#FF8700] mt-6 p-4 text-3xl rounded-xl px-16 ">
            <Link
              to="/availablebus"
              onClick={() => {
                props.setAuthentication(true);
              }}
            >
              Search
            </Link>
          </button>
        </div>
      </div>
      <div className="font-bold text-center py-10 text-2xl">
        Travel with world's largest bus service
      </div>
      <div className="flex items-center flex-col m-5  md:flex-row md:justify-center ">
        <Card
          title="2000+"
          description="bus collection"
          imageURL={buses}
        />
        <Card
          title="20 Million"
          description="happy customers globally"
          imageURL="https://image.emojipng.com/645/3039645.jpg"
        />
        <Card
          title="5000+"
          description="tickets book everyday"
          imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqjpYRNuYwypwqkCHVCrpTtRN_ij7b960Tw&usqp=CAU"
        />
      </div>
      <div className="font-bold text-2xl py-[5vh]">
        Here's what a few of our customers <br /> have to say
      </div>
      <div className="flex items-center flex-col mt-5 mb-16 py-10 w-full md:flex-row md:justify-center bg-slate-200">
        <RatingCard
          initial="V"
          name="Vatsal Agrawal"
          since="2020"
          description="Amazing travel experience with reserve. Excellent staff"
        />
        <RatingCard
          initial="V"
          name="Vanya Agrawal"
          since="2019"
          description="Amazing service. Always a best time with reserve."
        />
        <RatingCard
          initial="S"
          name="Seema Agrawal"
          since="2018"
          description="Bus was clean and the journey was smooth. Reached on time."
        />
      </div>
    </div>
  );
};

export default Home_Page;
