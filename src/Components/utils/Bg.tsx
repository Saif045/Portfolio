import React, { useMemo } from "react";
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";
import { anubis } from "../../assets/index";

// Round number up to nearest step for better canvas performance
const round = (n: number, step = 20) => Math.ceil(n / step) * step;

// Try making me lower to see how performance degrades
const STEP = 30;

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
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
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 5);
};

const Bg = () => {
  const { innerWidth, innerHeight } = useWindowSize();

  const options = useMemo(() => {
    return particleOptions;
  }, []);

  return (
    <ParticleImage
      src={anubis}
      width={
        Number(innerWidth) < 640 ? Number(innerWidth) : Number(innerWidth) / 2
      }
      height={
        Number(innerWidth) < 640
          ? Number(innerHeight) / 1.5
          : Number(innerHeight)
      }
      scale={Number(innerWidth) < 640 ? 0.4 : 0.5}
      entropy={4}
      maxParticles={5000}
      particleOptions={options}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="ffffff00"
      className="flex p-0 m-0 mb-4"
    />
  );
};

export default Bg;
