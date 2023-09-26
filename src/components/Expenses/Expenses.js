import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  const addFilterByYear = (newYear) => {
    setFilteredYear(newYear);
  };

  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          showYearHandler={addFilterByYear}
        />
        <ExpensesList data={filteredExpenses} />
      </Card>
    
  );
};

export default Expenses;
