import React from "react";
import { NavLink } from "react-router-dom";
import useStyle from "./Style/DateFilterBarStyle";

function DateFilterBar() {
  
  const classes = useStyle();
  return (
    <div className={classes.TabBarContainer} >
      <NavLink className={classes.nav} to="?date=today">Today</NavLink >
      <NavLink className={classes.nav} to="?date=weekly">Week</NavLink >
      <NavLink className={classes.nav} to="?date=yearly">Years</NavLink >
      <NavLink className={classes.nav} to="?date=last_5_years">Last 5 years</NavLink >
    </div>
  );
}

export default DateFilterBar;

