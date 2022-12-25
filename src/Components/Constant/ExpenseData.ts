import { createContext } from "react";
import AllExpense from "../Expense/ExpenseTable";

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
      date: "2018-12-12",
      amount: 172
    },
    {
      expenseCategory: "Food",
      date: "2017-7-12",
      amount: 162
    },
    {
      expenseCategory: "Food",
      date: "2022-12-25",
      amount: 162
    },{
      expenseCategory: "Food",
      date: "2021-11-23",
      amount: 152
    },{
      expenseCategory: "Food",
      date: "2021-12-30",
      amount: 142
    },{
      expenseCategory: "Food",
      date: "2022-12-20",
      amount: 1224
    },{
      expenseCategory: "Food",
      date: "2022-12-23",
      amount: 1223
    },{
      expenseCategory: "Food",
      date: "2022-12-24",
      amount: 123
    },
  ],
  rent:[{
    expenseCategory: "Rent",
    date: "2019-12-23",
    amount:33,
  },],
  travel:[{
    expenseCategory: "Travel",
    date: "2020-12-23",
    amount: 33,
  },],
  fun:[{
    expenseCategory: "Fun",
    date: "2021-12-12",
    amount: 22,
  },]
};


export const expenseContext = createContext<AllExpense | any>(null);
export const ExpenseProvider = expenseContext.Provider;


export default expense;
