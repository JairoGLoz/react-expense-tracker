import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // useState always returns an array of two elements
  //
  // title is a pointer to props.title
  // setTitle is a setter function that we must use to
  // change title value.
  //const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   // by using setTitle,
  //   // title will receive a new value and that change will
  //   // cause the component function to be executed again.
  //   setTitle("update");
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
