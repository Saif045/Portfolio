import React from "react";
import TextSpan from "./TextSpan";
import Bg from "./utils/Bg";

const Hero = () => {
  let h1 = "hi i'm Saif".split("");
  let p1 = "Front-End Web Developer".split("");
  let p2 = "React js Enthusiast".split("");

  return (
    <div className="relative flex h-screen ">
      <div className="absolute top-2/4 mt-14 sm:top-1/4 m-4 z-50  bg-black bg-opacity-60  text-3xl ">
        <h1>
          {h1.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </h1>
        <p>
          {p1.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </p>
        <p>
          {p2.map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </p>
      </div>
      <Bg />
    </div>
  );
};

export default Hero;

{
  /*
 {letter === " " ? "\u00A0" :  letter }
*/
}
