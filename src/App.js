import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Canvas } from "@react-three/fiber";
import shallow from "zustand/shallow";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";
import { Link as ScrollTo } from "react-scroll";
import Projects from "./components/Projects";
import About from "./components/About";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import DynamicFab from "./components/DynamicFab";
import { AnimateBox, useStore } from "./components/AnimateBox";
import { useWindowDimensions } from "./utils/helpers";

const useStyles = makeStyles({
  app: {
    position: "relative",
    height: "100vh",
  },
  canvas: ({ downMediumScreen }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed !important",
    background: "rgb(0 30 60) !important",
    "& > canvas": {
      width: downMediumScreen ? "80% !important" : "auto",
      height: downMediumScreen ? "80% !important" : "auto",
    },
  }),
  mask: ({ downMediumScreen }) => ({
    position: "fixed",
    background: downMediumScreen ? "rgba(0 0 0 / 58%)" : "rgba(0 0 0 / 62%)",
    width: "100%",
    height: "100%",
  }),
  homeScreen: ({ downMediumScreen }) => ({
    position: "absolute",
    color: "white",
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: downMediumScreen ? 34 : 64,
    lineHeight: 1,

    "& h1": {
      padding: downMediumScreen ? 24 : 42,
    },
  }),
  scrollButton: {
    position: "absolute",
    bottom: 42,

    "& svg": {
      fill: "white",
    },
  },
  spacer: {
    height: "100vh",
  },
});

function App() {
  const { downMediumScreen, upMediumScreen, innerHeight } =
    useWindowDimensions();
  const classes = useStyles({ downMediumScreen, innerHeight });
  const [canvasHeight, setCanvasHeight] = useState(0);
  const [boxes, mutate] = useStore(
    (state) => [state.boxes, state.mutate],
    shallow
  );

  useEffect(() => {
    if (innerHeight !== 0) {
      setCanvasHeight(innerHeight);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function animate() {
      mutate();
      requestAnimationFrame(animate);
    }
    animate();
  }, [mutate]);

  return (
    <div id="home" className={classes.app}>
      <Canvas className={classes.canvas} style={{ height: canvasHeight }}>
        {boxes.map((id) => (
          <AnimateBox key={id} id={id} />
        ))}
      </Canvas>

      <div className={classes.mask} />

      {downMediumScreen && <DynamicFab />}

      <Header />

      <div className={classes.homeScreen}>
        <h1>Hello, my name is Martin and I'm frontend developer</h1>

        {upMediumScreen && (
          <ScrollTo className={classes.scrollButton} to="about" spy smooth>
            <IconButton>
              <ArrowDownwardIcon size="large" />
            </IconButton>
          </ScrollTo>
        )}
      </div>

      <div className={classes.spacer} />

      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
