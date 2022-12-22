import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useStyle from "./Style/FilterTabBarStyle";
import { expenseContext } from "../Components/Constant/ExpenseData";

function FilterTabBar() {
  type ExpenseType = { 
    expenseCategory: string,
    date: string,
    amount: number,}
  const expenseData = useContext(expenseContext);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const filterDate = [expenseData];
  const currentDate = `${day}-${month}-${year}`;
  const  ClickHandler = (e:any) =>{
    e.preventDefault();
    let foodDate;
    filterDate.map((date)=> {
      foodDate = date.food.filter((date:ExpenseType)=> 
        date.date === currentDate);
    }
    );
    console.log(foodDate);
    // Object.keys(expenseData).map((key)=>{
    // filter[key]
    // console.log(key, "kes");
      
    // filter[key].map((item:[])=>item.filter((dates:any)=>{
    //   currentDate = dates.date;
    //   // console.log(filterDate, "filterDate");
        
    // }
    // )
    // );
    // });
  
  };

  const classes = useStyle();
  return (
    <div className={classes.TabBarContainer} >
      <NavLink  onClick={ClickHandler} className={classes.nav} to="today">Today</NavLink >
      <NavLink className={classes.nav} to="ss\r">Week</NavLink >
      <NavLink className={classes.nav} to="se">Years</NavLink >
      <NavLink className={classes.nav} to="ff">Last 5 years</NavLink >
      <Outlet />
    </div>
  );
}

export default FilterTabBar;

