import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import { useRef, useEffect } from "react";
import axios from "axios";

const App = () => {
  const inputRef = useRef();

  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://651283ceb8c6ce52b395bc33.mockapi.io/tasks")
      .then((res) => res.json())
      .then((tasks) => {
        dispatch({ type: "CREATE_TODOES", todoes: tasks });
      });
  }, [dispatch]);

  const createTodo = () => {
    const title = inputRef.current.value;
    if (title.trim("") !== "") {
      dispatch({ type: "ADD_TODO", title: title });
    }
    inputRef.current.value = "";
  };

  return (
    <div className="app">
      <div className="app__form">
        <input
          ref={inputRef}
          className="app__input"
          type="text"
          placeholder="write new todo..."
        />
        <button onClick={() => createTodo()} className="app__btn">
          Add New Todo
        </button>
      </div>
      <div className="app__todoBlock">
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
