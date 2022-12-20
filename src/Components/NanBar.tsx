import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/">All</NavLink >
      <NavLink to="food">Food</NavLink >
      <NavLink to="rent">Rent</NavLink >
      <NavLink to="travel">Travel</NavLink >
      <NavLink to="fun">Fun</NavLink >
      <Outlet />
    </div>
  );
}

export default NavBar;
