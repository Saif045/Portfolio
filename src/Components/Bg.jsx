import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadPolygonPath } from "tsparticles-path-polygon";
import { config } from "./BgConfig";

const Bg = () => {
  const options = useMemo(() => {
    return config;
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadPolygonPath(engine);
  }, []);

  return <Particles init={particlesInit} options={options} id="tsparticles" />;
};

export default Bg;
