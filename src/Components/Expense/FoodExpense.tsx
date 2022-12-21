import React from "react";
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
}

type ExpenseType = { 
  expenseCategory: string,
  date: string,
  amount: number,}

function FoodExpense(){

  const allData = useContext(expenseContext);
  const [allExpense, setAllExpense] = useState<any>(allData);
  useEffect(()=>{
    setAllExpense(allData);
  }, [allExpense]);
  const classes = useStyle();
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
              item.food.map((foods: ExpenseType)=>(
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

export default FoodExpense;
