import React, { useState } from "react";
import { foods, netflix, rreact, room, SunnySide } from "../assets/index";

const Projects = () => {
  const [data, setdata] = useState([netflix, rreact, SunnySide, room, foods]);
  return (
    <div className="">
      <p className="flex justify-center text-2xl">Projects</p>
      <div className="grid grid-cols-auto-fill-sm gap-2  justify-items-center m-4 container mx-auto">
        {data.map((a, i) => (
          <div className="border" key={i}>
            <div>
              <img className="w-full h-full" src={a} />

              <h1> Netflix </h1>
              <p>this is a website dedicated to show off my skills</p>
              <button className="px-4 py-2 bg-[#250618] bg-opacity-9590 border-double border-white border-opacity-60 border-4 rounded-sm m-1">
                Live
              </button>
              <button className="px-4 py-2 bg-[#250618] bg-opacity-9590 border-double border-white border-opacity-60 border-4 rounded-sm m-1">
                Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
