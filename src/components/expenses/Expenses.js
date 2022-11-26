import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./../expenseFilter/ExpenseFilter";
import { useEffect, useState } from "react";
const Expenses = ({ expenses }) => {
  let [year, setYear] = useState("");
  const filterHandle = (selectedYear) => {
    console.log("in filter handle", { selectedYear });
    setYear(selectedYear);
  };

  const filteredexpenses = expenses.filter((expense) => {
    let expenseDate = new Date(expense.date).getFullYear().toString();
    if (expenseDate == year || year == "") {
      return expense;
    }
  });

  let expenseContent = <p>No Expenses Found</p>;

  if (filteredexpenses.length > 0) {
    expenseContent = filteredexpenses.map((expense) => (
      <ExpenseItem className="expense-item" expense={expense} key={expense.id} />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter filterHandle={filterHandle} />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
