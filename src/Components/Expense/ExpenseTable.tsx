import { useContext, useState, useEffect } from "react";
import { expenseContext } from "../Constant/ExpenseData";
import { useParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useStyle from "../Style/MainContainerStyle";

function ExpenseTable() {
  const params = useParams();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const dateParams = urlParams.get("date");
  console.log(dateParams, "params");
  type ExpenseType = {
    expenseCategory: string,
    date: string,
    amount: number,
  }
  const allData = useContext(expenseContext);
  const [allExpense, setAllExpense] = useState(allData);
  useEffect(() => {
    setAllExpense(allData);
  }, [allExpense]);
  const classes = useStyle();
  const date = new Date();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const y = date.getFullYear();
  const currentDate = `${y}-${m}-${d}`;
  const lastFiveYears = `${y - 5}-${m}-${d}`;
  const oneYearsDate = `${y - 1}-${m}-${d}`;
  const weeklyDate = `${y}-${m}-${d - 7}`;
  function renderRows() {
    const key = params.path;
    const filteredDate = JSON.parse(JSON.stringify(allExpense));

    switch (dateParams) {
    case "today":
      Object.keys(filteredDate).map((key) => (
        filteredDate[key] = filteredDate[key].filter((item: ExpenseType) => (
          item.date === currentDate
        ))
      ));
      break;
    case "weekly":
      Object.keys(filteredDate).map((key) => (
        filteredDate[key] = filteredDate[key].filter((item: ExpenseType) => (
          item.date>=weeklyDate
        ))
      ));
      break;
    case "yearly":
      Object.keys(filteredDate).map((key) => (
        filteredDate[key] = filteredDate[key].filter((item: ExpenseType) => (
          item.date >= oneYearsDate
        ))
      ));
      break;
    case "last_5_years":
      Object.keys(filteredDate).map((key) => (
        filteredDate[key] = filteredDate[key].filter((item: ExpenseType) => (
          item.date >= lastFiveYears
        ))
      ));
      break;
    }
    console.log(filteredDate, "filterDate");
    if (key && key !== "all") {
      return (
        filteredDate[key].map((item: ExpenseType) => (
          <TableRow key={item.date}>
            <TableCell>{item.expenseCategory}</TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.amount}</TableCell>
          </TableRow>
        ))
      );
    }
    return (
      Object.keys(filteredDate).map((key) => (
        filteredDate[key].map((item: ExpenseType) => (
          <TableRow key={item.date}>
            <TableCell>{item.expenseCategory}</TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.amount}</TableCell>
          </TableRow>
        ))
      ))
    );
  }

  return (
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
            {renderRows()}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ExpenseTable;
