import { useState, useEffect, useRef } from "react";

import Todo from "./Todo";

const App = () => {
  const yourThings = [
    { title: "Clean garden", id: 1 },
    { title: "Clean home", id: 2 },
    { title: "Help my father", id: 3 },
  ];

  const inputRef = useRef("");
  const [list, setList] = useState(yourThings);

  const createNewTodo = () => {
    const lastId = list[list.length - 1].id;
    if (inputRef.current.value.trim("") !== "") {
      setList([
        ...list,
        { title: `${inputRef.current.value}`, id: lastId + 1 },
      ]);
    }
    inputRef.current.value = "";
  };

  return (
    <div className="app">
      <ul className="blockTodoLists">
        {list.map((thing) => {
          return <Todo key={thing.id} title={thing.title} />;
        })}
      </ul>
      <div className="app__addTodo">
        <input
          ref={inputRef}
          className="addTodo__input"
          type="text"
          placeholder="write new todo..."
        />
        <button onClick={createNewTodo} className="addTodo__btn">
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default App;
