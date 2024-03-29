import React, { useMemo } from "react";
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";

import {
  sDarkQ,
  sLightQ,
  sDarkC,
  sLightC,
  sDarkCk,
  sLightCk,
} from "../assets/S/index";
import useDarkSide from "./utils/useDarkSide";

// Round number up to nearest step for better canvas performance
const round = (n: number, step = 20) => Math.ceil(n / step) * step;

// Try making me lower to see how performance degrades
const STEP = 30;

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if magnitude < 200 (range 0-255)
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    return magnitude < 200;
  },

  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    // Canvases are much more performant when painting as few colors as possible.
    // Use color of pixel as color for particle however round to nearest 30
    // to decrease the number of unique colors painted on the canvas.
    // You'll notice if we remove this rounding, the framerate will slow down a lot.
    return `rgba(
      ${round(pixel.r, STEP)}, 
      ${round(pixel.g, STEP)}, 
      ${round(pixel.b, STEP)}, 
      ${round(pixel.a, STEP) / 255}
    )`;
  },

  radius: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    // Lighter colors will have smaller radius
    return 3 - (magnitude / 255) * 1.5;
  },
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 7);
};

const Shape = () => {
  const { innerWidth, innerHeight } = useWindowSize();
  const [isDarkTheme] = useDarkSide();

  const options = useMemo(() => {
    return particleOptions;
  }, []);

  function getRandomImport() {
    const imports = [
      [sDarkQ, sLightQ],
      [sDarkC, sLightC],
      [sDarkCk, sLightCk],
    ];

    const randomIndex = Math.floor(Math.random() * imports.length);
    const selectedImport = imports[randomIndex][isDarkTheme ? 1 : 0];

    return selectedImport;
  }
  return (
    <ParticleImage
      src={getRandomImport()}
      width={
        Number(innerWidth) < 768 ? Number(innerWidth) : Number(innerWidth) / 2
      }
      height={
        Number(innerWidth) < 768 ? Number(innerHeight) / 2 : Number(innerHeight)
      }
      scale={
        Number(innerWidth) < 320
          ? 0.4
          : Number(innerWidth) > 700
          ? 0.7
          : Number(innerWidth) > 900
          ? 0.8
          : 0.5
      }
      entropy={5}
      maxParticles={Number(innerWidth) < 640 ? 1000 : 6000}
      particleOptions={options}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="ffffff00"
      className="  m-0 p-0 z-40 block w-full md:w-[50vw] h-[50vh] md:h-full"
    />
  );
};

export default Shape;
