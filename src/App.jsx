import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import { useRef } from "react";

const App = () => {
  const inputRef = useRef();

  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const createTodo = () => {
    const title = inputRef.current.value;
    if (title.trim("") !== "") {
      dispatch({ type: "ADD_TODO", title: title });
    }
    inputRef.current.value = "";
  };

  const completedTodo = (id, completed) => {
    dispatch({ type: "TOGGLE_TODO", id: id, completed: completed });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", id: id });
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
            completedTodo={completedTodo}
            deleteTodo={deleteTodo}
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
