import React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { Link as ScrollTo } from "react-scroll";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "center",
    background: "#000815 !important",
  },
  button: {
    color: "white !important",
    fontFamily: "Josefin Sans !important",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.header}>
      {["Home", "About", "Works", "Contacts"].map((el) => (
        <ScrollTo key={el} to={el.toLowerCase()} spy smooth>
          <Button className={classes.button}>{el}</Button>
        </ScrollTo>
      ))}
    </AppBar>
  );
};

export default Header;
