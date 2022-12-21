import { createContext } from "react";

interface AllExpense {
  food: [
    {
      expenseCategory: string,
      date: string,
      amount: number,
    }
  ],
  rent: [
    {
      expenseCategory: string;
      date: string;
      amount: number;
    }
  ],
  travel: [
    {
      expenseCategory: string;
      date: string;
      amount: number;
    }
  ],
  fun: [
    {
      expenseCategory: string;
      date: string;
      amount: number;
    }
  ],
}

const expense: AllExpense = {
  food: [
    {
      expenseCategory: "Food",
      date: "2022-12-21",
      amount: 122
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
