import React from "react";
import { makeStyles } from "@mui/styles";
import workHistory from "../../utils/worksData";
import { useWindowDimensions } from "../../utils/helpers";

const useStyles = makeStyles({
  worksPageWrapper: ({ downMediumScreen }) => ({
    display: "flex",
    flexDirection: downMediumScreen ? "column" : "row",
    padding: downMediumScreen ? 16 : 42,
    // lineHeight: 1.4,
  }),
  title: ({ downMediumScreen }) => ({
    flex: 1,
    zIndex: 1,
    fontSize: downMediumScreen ? 42 : 62,
    margin: 0,
    paddingTop: 24,
    paddingLeft: downMediumScreen ? 16 : "auto",
    paddingBottom: downMediumScreen ? 24 : "auto",
    color: "white",
    fontFamily: "Josefin Sans",
  }),
  worksList: ({ downMediumScreen }) => ({
    paddingTop: downMediumScreen ? 16 : 0,
    display: "flex",
    flexDirection: "column",
    flex: 1.4,
  }),
  workListItem: ({ downMediumScreen }) => ({
    padding: downMediumScreen ? 16 : 24,
    marginBottom: 16,
    color: "white",
    zIndex: 1,
    background: "rgba(0 0 0 / 42%)",
    borderRadius: 4,
  }),
  position: ({ downMediumScreen }) => ({
    fontSize: downMediumScreen ? 22 : 24,
    marginTop: 0,
    marginBottom: 0,
  }),
  period: ({ downMediumScreen }) => ({
    fontSize: 18,
    color: "#04a026",
    marginTop: downMediumScreen ? 12 : 8,
    marginBottom: 8,
    fontStyle: "italic",
  }),
  target: ({ downMediumScreen }) => ({
    fontSize: downMediumScreen ? 20 : 22,
    marginTop: 8,
    marginBottom: 8,
    opacity: 0.82,
  }),
  tools: ({ downMediumScreen }) => ({
    fontSize: downMediumScreen ? 20 : 22,
    marginTop: 8,
    marginBottom: 0,
    fontStyle: "italic",
    opacity: 0.64,
  }),
});

const Projects = () => {
  const { downMediumScreen } = useWindowDimensions();
  const classes = useStyles({ downMediumScreen });

  return (
    <div id="works" className={classes.worksPageWrapper}>
      <h1 className={classes.title}>Employement history</h1>
      <div className={classes.worksList}>
        {workHistory.map((work) => (
          <div key={work.position} className={classes.workListItem}>
            <h3 className={classes.position}>{work.position}</h3>

            <h3 className={classes.period}>{work.period}</h3>

            <h3 className={classes.target}>{work.target}</h3>

            <p className={classes.tools}>{work.tools}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
