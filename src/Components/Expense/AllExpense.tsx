import { useContext } from "react";
// import expense from "../Constant/ExpenseData";
import { expenseContext } from "../Constant/ExpenseData";

function AllExpense(){
  const allData = useContext(expenseContext);
  console.log(allData, "from useContext");
  
  return(
    <div>
      <h1>sdklsmf</h1>
    </div>
  );
}

export default AllExpense;
