import React from "react";
import { makeStyles } from "@mui/styles";
import { useWindowDimensions } from "../../utils/helpers";

const useStyles = makeStyles({
  contactsWrapper: ({ downMediumScreen }) => ({
    display: "flex",
    flexDirection: downMediumScreen ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    padding: downMediumScreen ? 16 : 42,
    color: "white",
    height: "90vh",
    zIndex: 1,
    "& h1": {
      fontSize: downMediumScreen ? 42 : 62,
      flex: 1,
      zIndex: 1,
      paddingBottom: 16,
      paddingLeft: downMediumScreen ? 16 : 0,
      paddingTop: downMediumScreen ? 0 : 16,
      marginTop: 0,
      fontFamily: "Josefin Sans",
    },
    "& h3": {
      paddingRight: 16,
      fontSize: downMediumScreen ? 20 : 24,
      margin: 0,
      width: downMediumScreen ? 100 : 120,
    },
    "& p": {
      fontSize: downMediumScreen ? 20 : 24,
      margin: 0,
      lineHeight: 1.4,
    },
    "& a": {
      color: "white",
      fontSize: 20,
      textDecoration: "none",
      whiteSpace: "pre",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  }),
  aligner: ({ downMediumScreen }) => ({
    display: "flex",
    flexDirection: downMediumScreen ? "column" : "row",
    width: "100%",
  }),
  listWrapper: {
    zIndex: 1,
    color: "white",
    flex: 1,
  },
  contactItem: ({ downMediumScreen }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: "rgba(0 0 0 / 42%)",
    borderRadius: 4,
    padding: downMediumScreen ? 16 : 24,
    marginBottom: 16,
  }),
});

const contacts = [
  { target: "Email", profile: "byrlukmartin@gmail.com" },
  { target: "Telegram", profile: "the_voider" },
  {
    target: "LinkedIn",
    profile: "https://www.linkedin.com/in/martin-burlik-b8550a155/",
  },
];

const Contacts = () => {
  const { downMediumScreen } = useWindowDimensions();
  const classes = useStyles({ downMediumScreen });

  return (
    <div id="contacts" className={classes.contactsWrapper}>
      <div className={classes.aligner}>
        <h1>Contacts</h1>
        <div className={classes.listWrapper}>
          {contacts.map((elem) => (
            <div key={elem.target} className={classes.contactItem}>
              <h3>{elem.target}:</h3>

              {elem.target === "Email" && (
                <a href={"mailto:" + elem.profile}>{elem.profile}</a>
              )}

              {elem.target === "LinkedIn" && (
                <a
                  href={elem.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {elem.profile}
                </a>
              )}

              {elem.target === "Telegram" && (
                <a
                  href={"https://t.me/" + elem.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{elem.profile}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
