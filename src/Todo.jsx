import tick from "../img/icon-tick.svg";
import { useDispatch } from "react-redux";

const Todo = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const completedTodo = (id, completed) => {
    dispatch({ type: "TOGGLE_TODO", id: id, completed: completed });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", id: id });
  };

  return (
    <div className="todoBlock__todo">
      <div
        onClick={() => completedTodo(id, completed)}
        className="todo__checkbox"
      >
        {completed && <img src={tick} />}
      </div>
      <p className="todo__task">{title}</p>
      <button onClick={() => deleteTodo(id)} className="todo__deleteBtn">
        Delete
      </button>
    </div>
  );
};

export default Todo;
