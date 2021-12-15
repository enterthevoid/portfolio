import React from "react";
import { makeStyles } from "@mui/styles";
import { Link as ScrollTo } from "react-scroll";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";
import photo from "../../img/photo.png";
import { useWindowDimensions } from "../../utils/helpers";

const useStyles = makeStyles({
  aboutWrapper: ({ downMediumScreen }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    flexDirection: downMediumScreen ? "column" : "auto",
    justifyContent: "center",
    padding: downMediumScreen ? 16 : 42,
    paddingBottom: downMediumScreen ? 0 : "auto",
    color: "white",
    minHeight: downMediumScreen ? "100vh" : "90vh",
    zIndex: 1,

    "& h1": {
      fontSize: downMediumScreen ? 42 : 62,
      flex: downMediumScreen ? "auto" : 1,
      zIndex: 1,
      paddingTop: 24,
      paddingLeft: downMediumScreen ? 16 : "auto",
      marginTop: 0,
    },

    "& h3": {
      fontSize: downMediumScreen ? 20 : 24,
      padding: downMediumScreen ? 16 : 24,
      borderRadius: downMediumScreen ? "0px 0px 4px 4px" : "0px 4px 4px 0px",
      margin: 0,
      zIndex: 1,
      lineHeight: 1.4,
      background: "rgba(0 0 0 / 42%)",
    },
  }),
  aligner: ({ downMediumScreen }) => ({
    zIndex: 1,
    display: "flex",
    flexDirection: downMediumScreen ? "column" : "row",
  }),
  contentWrapper: ({ downMediumScreen, mediumScreen }) => ({
    flex: downMediumScreen ? "auto" : 1.4,
    display: "flex",
    flexDirection: downMediumScreen || mediumScreen ? "column" : "row",
  }),
  photo: ({ downMediumScreen, mediumScreen }) => ({
    height: downMediumScreen || mediumScreen ? 300 : "auto",
    minWidth: 300,
    borderRadius: downMediumScreen ? "4px 4px 0px 0px" : "4px 0px 0px 4px",
    background: `url(${photo})`,
    backgroundSize: "cover",
    backgroundPosition: mediumScreen || downMediumScreen ? "0% 25%" : "50% 0%",
  }),
  scrollButton: {
    position: "absolute",
    bottom: 42,

    "& svg": {
      fill: "white",
    },
  },
});

const About = () => {
  const { downMediumScreen, mediumScreen, upMediumScreen } =
    useWindowDimensions();
  const classes = useStyles({ downMediumScreen, mediumScreen });

  return (
    <div id="about" className={classes.aboutWrapper}>
      <div className={classes.aligner}>
        <h1>About</h1>

        <div className={classes.contentWrapper}>
          <div className={classes.photo} />
          <h3>
            Hi, I'm Martin Burlyk, born in Uzhgorod, Ukraine, in 1991. Working
            as a frontend developer since 2016. Punctual and motivated
            individual, able to work in a busy environment and maintain high
            working standards. It is crucial for me to sustain quality of my
            projects thus I permanently seek for ways to improve them. Being a
            quick learner, I posses excellent time keeping skills, am flexible
            and reliable. My creative mind is always up for new challenges,
            inventing new things, keeping up with trends in UI/UX branch. Except
            development, my passion is playing guitar, cycling and traveling.
            Scroll bellow to see empoyment history and contacts.
          </h3>
        </div>
      </div>

      {upMediumScreen && !mediumScreen && (
        <ScrollTo className={classes.scrollButton} to="works" spy smooth>
          <IconButton>
            <ArrowDownwardIcon size="large" />
          </IconButton>
        </ScrollTo>
      )}
    </div>
  );
};

export default About;
