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

  function renderRows() {
    const key = params.path;

    if (key && key !== "all") {
      return (
        allExpense[key].map((item: ExpenseType) => (
          <TableRow key={item.date}>
            <TableCell>{item.expenseCategory}</TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.amount}</TableCell>
          </TableRow>
        ))
      );
    }
    return (
      Object.keys(allExpense).map((key) => (
        allExpense[key].map((item: ExpenseType) => (
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
