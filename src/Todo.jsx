import tick from "../img/icon-tick.svg";

const Todo = ({ id, title, completed, completedTodo, deleteTodo }) => {
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
