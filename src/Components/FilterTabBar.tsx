import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useStyle from "./Style/FilterTabBarStyle";
import { expenseContext } from "./Constant/ExpenseData";

function FilterTabBar() {
  // const expenseData = useContext<any>(expenseContext);
  // const ClickHandler = ( filter:string )=>{
  // expenseData["food"].filter((food)=> {
  //   return new Date(food.date) 
  // }})
  // };
  const classes = useStyle();
  return (
    <div className={classes.TabBarContainer }>
      <NavLink className={classes.nav} to="sasas">Today</NavLink >
      <NavLink className={classes.nav} to="ss\r">Week</NavLink >
      <NavLink className={classes.nav} to="se">Years</NavLink >
      <NavLink className={classes.nav} to="ff">Last 5 years</NavLink >
      <Outlet />
    </div>
  );
}

export default FilterTabBar;

