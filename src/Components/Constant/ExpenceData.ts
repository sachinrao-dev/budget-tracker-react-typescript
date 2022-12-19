interface AllExpense {
  food: [
    {
      expenseCategory: string;
      date: string;
      amount: number;
    }
  ];
  rent: [
    {
      expenseCategory: string;
      date: string;
      amount: number;
    }
  ];
  travel: [
    {
      expenseCategory: string;
      date: string;
      amount: number;
    }
  ];
  fun: [
    {
      expenseCategory: string;
      date: string;
      amount: number;
    }
  ];
}

const getDataFromApi = () => {
  const dataPromise = new Promise((resolve) => {
    const expense: AllExpense[] = [
      {
        food: [
          {
            expenseCategory: "Food",
            date: "222",
            amount: 122
          },
        ],
        rent:[{
          expenseCategory: "Rent",
          date: "22",
          amount:33,
        },],
        travel:[{
          expenseCategory: "Fun",
          date: "2333",
          amount: 33,
        },],
        fun:[{
          expenseCategory: "Fun",
          date: "23",
          amount: 22,
        },]
      },
    ];
    resolve(expense);
  });
  return dataPromise;
};

export default getDataFromApi;
