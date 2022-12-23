import React from "react";
import { NavLink } from "react-router-dom";
import useStyle from "./Style/MenuBarStyle";
import SearchIcon from "@mui/icons-material/Search";

function MenuBar() {
  const classes = useStyle();  
  return (
    <div className={classes.searchTab}>
      <div className={classes.navBarContainer }>
        <NavLink className={classes.nav} to="all">All</NavLink >
        <NavLink className={classes.nav} to="food">Food</NavLink >
        <NavLink className={classes.nav} to="rent">Rent</NavLink >
        <NavLink className={classes.nav} to="travel">Travel</NavLink >
        <NavLink className={classes.nav} to="fun">Fun</NavLink >
      </div>
      <input />
      <SearchIcon />
    </div>
  );
}

export default MenuBar;
