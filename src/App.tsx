import { ExpenseProvider } from "./Components/Constant/ExpenseData";
import expense from "./Components/Constant/ExpenseData";
import AllExpense from "./Components/Expense/AllExpense";

function App() {
  return (
    <div>
      <ExpenseProvider value={expense}>
        <AllExpense />
      </ExpenseProvider>
    </div>
  );
}

export default App;
