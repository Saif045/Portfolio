import React, { useMemo } from "react";
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";
import { anubis } from "../../assets/index";

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#ffffff",
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
      width={Number(innerWidth) }
      height={Number(innerHeight) / 1.5}
      scale={0.2}
      entropy={5}
      maxParticles={5000}
      particleOptions={options}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="ffffff00"
      className="particles -z-50 sm:z-40"
    />
  );
};

export default Bg;
