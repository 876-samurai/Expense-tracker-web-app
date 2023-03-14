import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "../UI/ExpenseItems.css";
import Card from '../UI/Card'


function ExpenseItems(props) {

const [title, setTitle] = useState(props.title)

  // let title = props.title
  const clickHandler = () => {
    setTitle ("updated")
  console.log(title)
}

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div>
        <h2 className="expense-item__description">{title}</h2>
        <button onClick={clickHandler}>Click here</button>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItems;
