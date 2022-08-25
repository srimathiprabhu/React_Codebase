import React, {useState} from "react";
import './NewExpenseForm.css'

const NewExpenseForm = (props) => {
  const dateObj = new Date(Date.now());
  const day = dateObj.toLocaleString('en-US', {day: '2-digit'})
  const month = dateObj.toLocaleString('en-US', {month: '2-digit'})
  const year = dateObj.getFullYear()
  let [title, setTitle] = useState('')
  let [amount, setAmount] = useState('')
  let [date, setDate] = useState('')

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value)
  }
  const onAmountChangeHandler = (event) => {
    setAmount(event.target.value)
  }
  const onChangeDateHandler = (event) => {
    setDate(event.target.value)
  }
  const onSubmitClickHandler = (event) => {
    event.preventDefault()
    if(title && amount && date) {
      const newExpense = {
        title: title,
        amount: amount,
        date: new Date(date)
      }
      props.onAddNewExpense(newExpense)
      setDate('')
      setAmount('')
      setTitle('')
    }
  }

  const onCancelHandler = () => {
    props.onCancel()
  }

  return (
    <form onSubmit={onSubmitClickHandler}>
      <div className={'new-expense__controls'}>
        <div className={'new-expense__control'}>
          <label>Title</label>
          <input type={'text'} onChange={onTitleChangeHandler} value={title}/>
        </div>
        <div className={'new-expense__control'}>
          <label>Amount</label>
          <input type={'number'} min={'1'} onChange={onAmountChangeHandler} value={amount}/>
        </div>
        <div className={'new-expense__control'}>
          <label>Date</label>
          <input type={'date'} min={"2017-01-01"} max={year+'-'+month+'-'+day} onChange={onChangeDateHandler} value={date}/>
        </div>
      </div>
      <div className={'new-expense__actions'}>
        <button type={'button'} onClick={onCancelHandler}>Cancel</button>
        <button type={'submit'}>Add Expense</button>
      </div>
    </form>
  )
}

export default NewExpenseForm