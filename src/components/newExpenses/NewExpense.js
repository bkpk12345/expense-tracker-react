import "./NewExpenses.css";
import React from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const { getExpense } = props;

  const getNewExpenses = (expense) => {
    getExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm getExpense={getNewExpenses} />
    </div>
  );
};

export default NewExpense;
