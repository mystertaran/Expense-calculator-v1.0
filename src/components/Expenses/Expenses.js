import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css"
import { useState } from "react";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');
  
  const addFilterByYear = (newYear) => {
    setFilteredYear(newYear);
    console.log(`Here is from Expenses ${newYear}`)
  }

 return (
    <Card className="expenses">
        <ExpensesFilter showYearHandler={addFilterByYear} />
        <ExpenseItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.data[3].title}
        amount={props.data[3].amount}
        date={props.data[3].date}
      ></ExpenseItem>
    </Card>
 )
}

export default Expenses;