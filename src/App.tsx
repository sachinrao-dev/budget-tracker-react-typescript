import { ExpenseProvider } from "./Components/Constant/ExpenseData";
import expense from "./Components/Constant/ExpenseData";
import { BrowserRouter ,Route ,Routes } from "react-router-dom";
import MainContainer from "./Components/MainContainer";

function App() {
  return (
    <div>
      <ExpenseProvider value={expense}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainContainer />}>
              <Route path="/:path" element={<MainContainer />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ExpenseProvider>
    </div>
  );
}

export default App;
