import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link as ScrollTo } from "react-scroll";

const useStyles = makeStyles({
  scrollButton: {
    zIndex: 2,
    position: "fixed",
    bottom: 24,
    right: 24,
  },
  fab: {
    background: "#04a026 !important",
  },
});

const DynamicFab = () => {
  const classes = useStyles();
  const hasWindow = typeof window !== "undefined";
  const [opacity, setOpacity] = useState(0);

  const handleElementsOnScroll = () => {
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 600) {
        setOpacity(0.64);
      } else {
        setOpacity(0);
      }
    };
  };

  useEffect(() => {
    if (hasWindow) {
      handleElementsOnScroll();
    }
  }, [hasWindow]);

  return (
    <ScrollTo
      className={classes.scrollButton}
      style={{ opacity }}
      to="home"
      spy
      smooth
    >
      <Fab className={classes.fab}>
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTo>
  );
};

export default DynamicFab;
