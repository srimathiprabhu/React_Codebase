import React from "react";
import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  return (
    <ul className={'expenses-list'}>
      {
        props.expenses.map((expense) => {
          return <ExpenseItem expenses={expense} key={expense.id}/>
        })
      }
    </ul>
  )
}

export default ExpensesList