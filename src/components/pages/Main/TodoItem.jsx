import React from "react";
import t from "./todoItem.module.scss";
import { useDispatch } from "react-redux";
import { toggleCompletedTodo, removeTodo } from "../../../features/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const toggleTodoHandler = (id) => {
    dispatch(toggleCompletedTodo(id));
  };
  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id))
  }
  return (
    <div className={t.todoItem__wrapper}>
      <div
        className={`${t.completed}`}
        onClick={() => toggleTodoHandler(todo.id)}
      >
        Complete
      </div>

      <div className={`${t.textWrapper} ${todo.completed ? t.changed : ""}`}>
        {todo.text}
      </div>
      <div className={t.delete} onClick={() => removeTodoHandler(todo.id)}>Delete</div>
    </div>
  );
};

export default TodoItem;
