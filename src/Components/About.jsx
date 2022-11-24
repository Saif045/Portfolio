import React from "react";
import { skills, list } from "./utils/skills";

const About = () => {
  return (
    <div className="container mx-auto grid  my-20">
      <div className="sm:w-1/2 lg:w-1/3 m-4 ">
        <h1 className="text-xl mb-2">About Me</h1>
        <p>
          A passionate individual who always thrive to work on end to end
          products which develop sustainable and scalable social and technical
          systems to create impact.
        </p>
      </div>
      <div className="sm:w-1/2 lg:w-1/3 m-4 text-end justify-self-end ">
        <div>
          <h1 className="text-xl mb-2 ">Skills</h1>
          <p>{skills.join(" , ")}</p>
        </div>
        <div>
          <h1 className="text-lg mt-2 my-1 ">Things i intend to learn</h1>
          <p>{list.join(" , ")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
