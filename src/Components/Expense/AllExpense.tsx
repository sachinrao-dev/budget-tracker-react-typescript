import { useContext } from "react";
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

function AllExpense(){
  const classes = useStyle();
  const allData = useContext(expenseContext);
  console.log(allData);
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
        </Table>
      </TableContainer>
    </div>
  );
}

export default AllExpense;
