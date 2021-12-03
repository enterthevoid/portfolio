import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  const { innerWidth, innerHeight } = window;
  const downMediumScreen = innerWidth < 900;
  const upMediumScreen = innerWidth > 900;
  const mediumScreen = innerWidth > 900 && innerWidth < 1320;

  return {
    innerWidth,
    innerHeight,
    downMediumScreen,
    upMediumScreen,
    mediumScreen,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export { useWindowDimensions };
