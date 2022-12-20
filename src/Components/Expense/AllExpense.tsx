import { useContext, useState, useEffect } from "react";
import { expenseContext } from "../Constant/ExpenseData";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useStyle from "../Style/AllExpenseStyle";

type ItemType = {
  food: { expenseCategory: string,
    date: string,
    amount: number,}[],
  rent:
    { expenseCategory: string,
      date: string,
      amount: number,}[],

}

type FoodsType = { 
  expenseCategory: string,
  date: string,
  amount: number,}

function AllExpense(){

  const allData = useContext(expenseContext);
  const [allExpense, setAllExpense] = useState<any>(allData);
  useEffect(()=>{
    setAllExpense(allData);
  }, [allExpense]);
  const classes = useStyle();
  allExpense.map((item:ItemType )=>console.log(item.food[0].date)
  );

  return(
    <div className={classes.tableContainer}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Expense Category </TableCell>
              <TableCell> Expense Data </TableCell>
              <TableCell> Expense in RS </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allExpense.map((item:ItemType)=>(
              item.food.map((foods: FoodsType)=>(
                <TableRow>
                  <TableCell>{foods.expenseCategory}</TableCell>
                  <TableCell>{foods.date}</TableCell>
                  <TableCell>{foods.amount}</TableCell>
                </TableRow>
              ))
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AllExpense;
