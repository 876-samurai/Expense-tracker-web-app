import React from "react";
import ExpenseDate from "./ExpenseDate";
import "../UI/ExpenseItems.css";
import Card from '../UI/Card'


function ExpenseItems(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div>
        <h2 className="expense-item__description">{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItems;
