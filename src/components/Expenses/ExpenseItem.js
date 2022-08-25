import React, {useState} from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, ] = useState(props.expenses.title)

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.expenses.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>INR {props.expenses.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem