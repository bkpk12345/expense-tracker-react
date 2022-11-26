import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = ({ expense }) => {
  console.log({ expense });
  const [title, setTitle] = useState(expense.title);
  const onClickHandle = () => {
    setTitle("new title");
  };
  return (
    <Card>
      <div className="expense-item" key={expense.id}>
        <ExpenseDate date={expense.date} />

        <div className="expense-item__description">
          <h2>{title ?? title}</h2>
          <div className="expense-item__price">{expense.price}</div>
        </div>
        <button onClick={onClickHandle}>Change text</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
