import React, { useState,useContext } from "react";
import { expenseContext } from "../Constant/ExpenseData";
import expense from "../Constant/ExpenseData";

function ExpenseForm(){
  const options = ["Food", "Rent", "Travel", "Fun"];
  const [selected, setSelected] = useState<any>(options[0]);
  const [date, setDate] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);


  interface ExpenseDataType {
    expenseCategory: string,
    date: string,
    amount: number,
  }

  function addExpense(e:any){
    e.preventDefault();
    console.log(selected+ " "+ date+ " "+ expense, "sachin");
    const expenseObj: ExpenseDataType = {
      expenseCategory: selected,
      date: date,
      amount: amount
    };
    console.log(typeof(expenseObj.expenseCategory),  "expesne cat");
    console.log(typeof(expenseObj.date),  "date");
    console.log(typeof(expenseObj.amount),  "expesne");

    

    // const  temExpense   = {...expense};
    // temExpense["food"].push(expenseObj);

    expense["food"].push(expenseObj);
    // console.log(expenses);
  }
    
  return(
    <div>
      <form>
        <label>Expense Category</label>
        <select 
          value={selected} 
          onChange={e => setSelected(e.target.value)}>
          {options.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
        <label>Create Date</label>
        <input type="date" onChange={(e)=>setDate(e.target.value)}/>
        <label>Expense</label>
        <input type="number" onChange={(e)=>setAmount(parseInt(e.target.value))}/>

        <button onClick={addExpense}> Save Expense</button>

      </form>
    </div>
  );   
}

export default ExpenseForm;
