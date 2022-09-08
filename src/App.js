import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 99.53,
    date: new Date(2021, 3, 27),
  },

  {
    id: "e2",
    title: "New tv",
    amount: 799.53,
    date: new Date(2021, 9, 30),
  },

  {
    id: "e3",
    title: "Car Insurance",
    amount: 599.53,
    date: new Date(2021, 10, 5),
  },

  {
    id: "e4",
    title: "New Desk (wooden)",
    amount: 450.05,
    date: new Date(2021, 7, 9),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Let's get started Gt!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
