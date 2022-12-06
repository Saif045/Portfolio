import React from "react";
import { data } from "../assets/data";

const Projects = () => {
  return (
    <div className="mt-7">
      <p className="flex justify-center text-2xl mb-10">Projects</p>
      <div className="grid grid-cols-auto-fill sm:grid-cols-auto-fill-sm gap-2  justify-items-center m-4 container mx-auto">
        {data.map((site, i) => (
          <div className="border relative pb-12" key={i}>
            <div>
              <img className="w-full h-full" src={site.img} alt={site.name} />
              <div className="   p-2">
                <h1>{site.name}</h1>
                <p>{site.description}</p>

                <div className="absolute bottom-0 ">
                  <a href={site.live} target="_blank">
                    <button className="px-4 py-2 bg-transparent border-t border-x border-[#ECCE8E] hover:border-[#ecce8eb7] rounded-t-full">
                      Live
                    </button>
                  </a>
                  <a href={site.code} target="_blank">
                    <button className="px-4 py-2 bg-transparent border-t border-x border-[#ECCE8E] hover:border-[#ecce8eb7] rounded-t-full">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
