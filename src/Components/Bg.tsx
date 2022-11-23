import React, { useMemo } from "react";
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";
import { s } from "../assets/index";

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#61dafb",
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
      src={s}
      width={Number(innerWidth)}
      height={Number(innerHeight)}
      scale={0.75}
      entropy={20}
      maxParticles={4000}
      particleOptions={options}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="#ffffff00"
      className="absolute right-0 tsparticles"
    />
  );
};

export default Bg;