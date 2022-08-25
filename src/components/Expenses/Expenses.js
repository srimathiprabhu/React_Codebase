import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

  return (
    <li>
      <Card className={'expenses'}>
        <ExpensesFilter />
        <ExpensesList expenses={props.expenses}/>
      </Card>
    </li>
  )
}
export default Expenses
