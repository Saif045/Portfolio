import React from "react";
import Bg from "./Bg";

const Hero = () => {
  return (
    <div className="relative flex w-screen h-screen  ">
      <div className="absolute top-2/4 mt-14 sm:top-1/4  bg-black bg-opacity-60  text-2xl">
        <h1>hi i'm Saif</h1>
        <p>Front-End Web Developer</p>
        <p>React js Enthusiast</p>
      </div>
      <Bg className="absolute"/>
    </div>
  );
};

export default Hero;
