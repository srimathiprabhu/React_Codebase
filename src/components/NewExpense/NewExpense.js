import React, {useState} from "react";
import './NewExpense.css'
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false)

  const addSubmitHandler = (newExpense) => {
    const expense = {
      id: Math.floor(Math.random()*100).toString(),
      ...newExpense
    }
    setShowNewExpenseForm(false)
    props.addExpense(expense)
  }

  const showExpenseForm = () => {
    setShowNewExpenseForm(true)
  }

  const hideExpenseForm = () => {
    setShowNewExpenseForm(false)
  }

  const showAddExpenseButton = <button  onClick={showExpenseForm}>Add New Expense</button>
  const showAddExpenseForm = <NewExpenseForm onAddNewExpense={addSubmitHandler} onCancel={hideExpenseForm}/>

  return (
    <div className={'new-expense'}>
      { showNewExpenseForm ? showAddExpenseForm : showAddExpenseButton }
    </div>
  )
}

export default NewExpense