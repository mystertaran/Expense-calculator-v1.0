import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isShown, setIsShown] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsShown(false)
  };

  const clickFormHandler = () => {
    setIsShown(true);
  };

  const hideForm = () => {
    setIsShown(false);
  };

  return (
    <div className="new-expense">
      {!isShown && <button onClick={clickFormHandler}>Add New Expense</button>}
      {isShown && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideForm}
        />
      )}
    </div>
  );
}

export default NewExpense;
