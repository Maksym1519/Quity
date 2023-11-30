import React, { useState } from "react";
import f from "./form.module.scss";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todoSlice";
import { v4 } from 'uuid';

const Form = () => {
  const dispatch = useDispatch();
  const [todoValue,setTodoValue] = useState("")
  const addTodoHandler = () => {
    const todo = {
      id: v4(),
      text: todoValue,
      completed: false,
    };
    dispatch(addTodo(todo))
    setTodoValue("")
  };
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={todoValue} placeholder="text" className={f.input} onChange={(e) => setTodoValue(e.target.value)}/>
      </form>
      <button type="submit" className={f.button} onClick={addTodoHandler}>
        Submit
      </button>
    </>
  );
};

export default Form;
