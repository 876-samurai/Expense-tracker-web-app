import React from "react";
import ExpenseItems from "./components/Expenses/ExpenseItems";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  return (
    <>
    <NewExpense />
    <div>
     <Expenses/>
      </div>
      </>
  );
}

export default App;
