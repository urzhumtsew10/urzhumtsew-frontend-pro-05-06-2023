import { useState, useEffect, useRef } from "react";

import Todo from "./Todo";

const App = () => {
  const yourThings = [
    { title: "Clean garden" },
    { title: "Clean home" },
    { title: "Help my father" },
  ];

  const inputRef = useRef("");
  const [list, setList] = useState(yourThings);

  const getInputValue = () => {
    setList([...list, { title: `${inputRef.current.value}` }]);
    inputRef.current.value = "";
  };

  return (
    <div className="app">
      <ul className="blockTodoLists">
        {list.map((thing) => {
          return <Todo key={Math.random()} title={thing.title} />;
        })}
      </ul>
      <div className="app__addTodo">
        <input
          ref={inputRef}
          className="addTodo__input"
          type="text"
          placeholder="write new todo..."
        />
        <button onClick={getInputValue} className="addTodo__btn">
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default App;
