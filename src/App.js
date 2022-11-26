import NewExpense from "./components/newExpenses/NewExpense";
import Expenses from "./components/expenses/Expenses";
import { useState, useEffect } from "react";
import ExpensesFilter from "./components/expenseFilter/ExpenseFilter";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Car Insurence", date: new Date("june 10 2022").toDateString(), price: "13200$" },
    { id: 2, title: "Bike Insurence", date: new Date("july 10 2022").toDateString(), price: "10310$" },
    { id: 3, title: "Home Insurence", date: new Date("june 10 2021").toDateString(), price: "324100$" },
    { id: 4, title: "Education Insurance", date: new Date("march 10 2022").toDateString(), price: "54200$" },
  ]);
  const getExpense = (expense) => {
    let newExpense = {
      ...expense,
      price: `${expense.amount}$`,
      date: `${expense.date}`,
    };
    console.log("In app.js", { newExpense });

    setExpenses((preExpenses) => {
      return [newExpense, ...preExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense getExpense={getExpense} />

      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
