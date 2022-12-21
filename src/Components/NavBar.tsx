import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useStyle from "./Style/NavBarStyle";
import Search from "./Search";

function NavBar() {
  const classes = useStyle();
  return (
    <div className={classes.searchTab}>
      <div className={classes.navBarContainer }>
        <NavLink className={classes.nav} to="/">All</NavLink >
        <NavLink className={classes.nav} to="food">Food</NavLink >
        <NavLink className={classes.nav} to="rent">Rent</NavLink >
        <NavLink className={classes.nav} to="travel">Travel</NavLink >
        <NavLink className={classes.nav} to="fun">Fun</NavLink >
        <Outlet />
      </div>
      <Search />
    </div>
  );
}

export default NavBar;
