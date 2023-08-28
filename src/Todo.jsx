import { useState } from "react";
import tick from "../img/icon-tick.svg";

const Todo = ({ title }) => {
  const [isDone, setStateTodo] = useState(false);
  const clickOnTodoList = () => {
    setStateTodo(!isDone);
  };

  return (
    <li onClick={clickOnTodoList} className="blockTodoLists__item">
      <div className="boxResult"> {isDone ? <img src={tick} /> : ""} </div>
      {title}
    </li>
  );
};

export default Todo;
