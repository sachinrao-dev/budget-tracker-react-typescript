/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import ExpenseData from "./Expense/ExpenseTable";
import MenuBar from "./MenuBar";
import DateFilterBar from "./DateFilterBar";

function MainContainer(){

  const [searchParam, setSearchParam] = useState<any>();
  return (
    <div>
      <MenuBar setSearchParam={setSearchParam} />
      <DateFilterBar />
      <ExpenseData searchParam= {searchParam} />
    </div>
  );
}

export default MainContainer;
