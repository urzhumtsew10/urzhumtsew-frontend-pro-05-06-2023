import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";

const rootElement = document.querySelector("#root");

if (!rootElement) {
  console.log("Error not found root");
}

const initialState = {
  todoList: [
    { id: 1, title: "Clean garden", completed: false },
    { id: 2, title: "Help dad", completed: false },
  ],
};

const todoReducer = (state = initialState, action) => {
  const todoList = state.todoList;
  switch (action.type) {
    case "TOGGLE_TODO":
      const updateState = todoList.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !action.completed };
        }
        return todo;
      });
      return { todoList: [...updateState] };
    case "ADD_TODO":
      const lastId = todoList.length ? todoList[todoList.length - 1].id : 0;

      return {
        todoList: [...todoList, { id: lastId + 1, title: action.title }],
      };
    case "DELETE_TODO":
      const updateList = todoList.filter((todo) => todo.id !== action.id);
      return { todoList: [...updateList] };
    default:
      return state;
  }
};

const root = createRoot(rootElement);
const store = createStore(todoReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
