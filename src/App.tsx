import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ExpenseProvider } from "./Components/Constant/ExpenseData";
import expense from "./Components/Constant/ExpenseData";
import AllExpense from "./Components/Expense/AllExpense";
import FoodExpense from "./Components/Expense/FoodExpense";
import NavBar from "./Components/NavBar";
import RentExpense from "./Components/Expense/RentExpense";
import FunExpense from "./Components/Expense/FunExpense";
import TravelExpense from "./Components/Expense/TravelExpense";
import FilterTabBar from "./Components/FilterTabBar";

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
            <Route path="/*" element={<AllExpense />} />
            <Route path="/food" element={<FoodExpense />} />
            <Route path="/rent" element={<RentExpense />} />
            <Route path="/travel" element={<TravelExpense />} />
            <Route path="/fun" element={<FunExpense />} />

          </Routes>
        </BrowserRouter>
        {/* <AllExpense /> */}
      </ExpenseProvider>
    </div>
  );
}

export default App;
