import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const { getExpense } = props;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [submit, setSubmit] = useState([title, amount, date]);
  const onTitleChangeHandler = (e) => {
    console.log({ title: e.target.value });
    setTitle(e.target.value);
  };

  const onAmountChangeHandler = (e) => {
    console.log({ amount: e.target.value });

    setAmount(e.target.value);
  };

  const onDateChangeHandler = (e) => {
    console.log({ date: e.target.value });

    setDate(e.target.value);
  };

  const submitHadler = (event) => {
    event.preventDefault();
    setSubmit([title, amount, date]);
    console.log({
      title,
      amount,
      date,
    });

    setTitle("");
    setAmount("");
    setDate("");
    const id = Math.random() * 100000;
    getExpense({ title, amount, date, id });
  };

  return (
    <form onSubmit={submitHadler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={onTitleChangeHandler}></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} min="0.1" step="0.01" onChange={onAmountChangeHandler}></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} onChange={onDateChangeHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHadler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
