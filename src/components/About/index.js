import React from "react";
import { makeStyles } from "@mui/styles";
import { Link as ScrollTo } from "react-scroll";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";
import photo from "../../img/photo.jpg";
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
      fontFamily: "Josefin Sans",
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
    backgroundPositionX: "36%",
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
            My name is Martin Burlyk, I was born in Uzhhorod, Ukraine in 1991.
            Working as a frontend developer from 2016. <br /> I am a punctual
            and motivated individual who is able to work in a busy environment
            and produce high standards of work. <br /> Very concerned about the
            quality of my work and always seek for ways of improvement.
            flexible, highly reliable and possess excellent time keeping skills.{" "}
            <br /> Quick learner and willing to adapt to any job. I have a
            creative mind and I'm always up for new challenges, like to invent
            new things and love to follow and learn new trends in UI/UX branch.{" "}
            <br /> Fluently speak 4 languages. <br />
            My hobbies are guitar and cycling, also love to travel.
            <br />
            Scroll bellow to see empoyment history and contacts.
          </h3>
        </div>
      </div>

      {upMediumScreen && (
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
