import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useStyle from "./Style/FilterTabBarStyle";
import { expenseContext } from "./Constant/ExpenseData";

function FilterTabBar() {
  const expenseData = useContext<any>(expenseContext);
  // console.log(new Date(expenseData["food"][0].date).getUTCDate());
  const  ClickHandler = () =>{
    // console.log(expenseData, "this is expenseData");

    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = `${day}-${month}-${year}`;
    console.log(currentDate, "current date");

    
  };
  const classes = useStyle();
  return (
    <div className={classes.TabBarContainer }>
      <NavLink  onClick={() => ClickHandler()} className={classes.nav} to="sasas">Today</NavLink >
      <NavLink className={classes.nav} to="ss\r">Week</NavLink >
      <NavLink className={classes.nav} to="se">Years</NavLink >
      <NavLink className={classes.nav} to="ff">Last 5 years</NavLink >
      <Outlet />
    </div>
  );
}

export default FilterTabBar;

