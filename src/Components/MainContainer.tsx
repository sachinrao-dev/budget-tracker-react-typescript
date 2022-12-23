import React from "react";
import ExpenseData from "./Expense/ExpenseTable";
import MenuBar from "./MenuBar";
import DateFilterBar from "./DateFilterBar";

function MainContainer(){
  return (
    <div>
      <MenuBar />
      <DateFilterBar />
      <ExpenseData />
    </div>
  );
}

export default MainContainer;
