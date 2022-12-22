import { BrowserRouter, Route ,Routes } from "react-router-dom";
import { ExpenseProvider } from "./Components/Constant/ExpenseData";
import expense from "./Components/Constant/ExpenseData";
import NavBar from "./Components/NavBar";
import FilterTabBar from "./Components/FilterTabBar";
import AllExpense from "./Components/Expense/AllExpense";

function App() {
  return (
    <div>
      <ExpenseProvider value={expense}>
        <BrowserRouter>
          <div className="navBar">
            <NavBar />
            <FilterTabBar />
          </div>
          <Routes>
            <Route path="/:path" element={<AllExpense />} />
          </Routes>
        </BrowserRouter>
      </ExpenseProvider>
    </div>
  );
}

export default App;
