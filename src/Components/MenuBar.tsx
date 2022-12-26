/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useStyle from "./Style/MenuBarStyle";
import SearchIcon from "@mui/icons-material/Search";

function MenuBar(props:any) {
  const { setSearchParam } =props;

  const navigate = useNavigate();
  
  const classes = useStyle();
  const [searchTerm, setSearchTerm] = useState<any>(); 
  function searchHandler(){
    console.log(searchTerm, "search here");
    setSearchParam(searchTerm);
    // setSearchParam(searchTerm);  
  }

  function addExpenseNavigate(){
    navigate("/addexpense");
  }
  
  return (
    <div className={classes.searchTab}>
      <div className={classes.navBarContainer }>
        <NavLink className={classes.nav} to="all">All</NavLink >
        <NavLink className={classes.nav} to="food">Food</NavLink >
        <NavLink className={classes.nav} to="rent">Rent</NavLink >
        <NavLink className={classes.nav} to="travel">Travel</NavLink >
        <NavLink className={classes.nav} to="fun">Fun</NavLink >
      </div>
      <input placeholder="search" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
      <SearchIcon onClick= {searchHandler} />

      <button onClick={()=>addExpenseNavigate()}>Add expense</button>
    </div>
  );
}

export default MenuBar;
