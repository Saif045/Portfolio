import React, { useMemo } from "react";
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";
import { me } from "../../assets/index";

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
      src="https://pixabay.com/get/gb9d8fed782a3d516dcb7f27f15ca336b09e899f877d99c1a824f9153798f422de5dcdc89792bc54e681e065d2cb2acbe7444406fe9550e897d37bf62764e048c_1280.png"
      width={Number(innerWidth) }
      height={Number(innerHeight) / 1.5}
      scale={0.25}
      entropy={5}
      maxParticles={6000}
      particleOptions={options}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="ffffff00"
      className="particles -z-50 sm:z-40"
    />
  );
};

export default Bg;
