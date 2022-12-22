import { createContext } from "react";
import AllExpense from "../Expense/AllExpense";

interface AllExpense {
  food: {
      expenseCategory: string,
      date: string,
      amount: number,
    }[],
  rent:{
      expenseCategory: string;
      date: string;
      amount: number;
    }[],
  travel:{
      expenseCategory: string;
      date: string;
      amount: number;
    }[],
  fun:{
      expenseCategory: string;
      date: string;
      amount: number;
    }[],
}

const expense: AllExpense = {
  food:[
    {
      expenseCategory: "Food",
      date: "22-12-2022",
      amount: 172
    },
    {
      expenseCategory: "Food",
      date: "21-12-2022",
      amount: 162
    },
    {
      expenseCategory: "Food",
      date: "18-12-2022",
      amount: 162
    },{
      expenseCategory: "Food",
      date: "20-12-2022",
      amount: 152
    },{
      expenseCategory: "Food",
      date: "19-12-2022",
      amount: 142
    },{
      expenseCategory: "Food",
      date: "17-12-2022",
      amount: 1224
    },{
      expenseCategory: "Food",
      date: "12-12-2022",
      amount: 1223
    },{
      expenseCategory: "Food",
      date: "10-10-2022",
      amount: 123
    },
  ],
  rent:[{
    expenseCategory: "Rent",
    date: "2018-04-23",
    amount:33,
  },],
  travel:[{
    expenseCategory: "Travel",
    date: "2020-01-23",
    amount: 33,
  },],
  fun:[{
    expenseCategory: "Fun",
    date: "2021-05-24",
    amount: 22,
  },]
};


export const expenseContext = createContext<AllExpense | any>(null);
export const ExpenseProvider = expenseContext.Provider;


export default expense;
