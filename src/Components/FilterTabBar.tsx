import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useStyle from "./Style/FilterTabBarStyle";

function FilterTabBar() {
  const classes = useStyle();
  return (
    <div className={classes.TabBarContainer }>
      <NavLink className={classes.nav} to="/">Today</NavLink >
      <NavLink className={classes.nav} to="food">Week</NavLink >
      <NavLink className={classes.nav} to="rent">Years</NavLink >
      <NavLink className={classes.nav} to="travel">Last 5 years</NavLink >
      <Outlet />
    </div>
  );
}

export default FilterTabBar;

