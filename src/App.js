import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const InitialExpenses = [
  {
    id: '1',
    title: 'Birthday Dress',
    amount: 1500,
    date: new Date(2020, 3, 15),
  },
  {
    id: '2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 2)
  },
  {
    id: '3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: '4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(InitialExpenses)

  const addNewExpenseHandler = (expense) => {
    console.log('expense added!')
    setExpenses((prevState) => {
      return [expense, ...prevState]
    })
  }

  return (
    <div>
      <NewExpense addExpense={addNewExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
