import React from "react";
import m from "./main.module.scss";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setHeaderShop } from "../../../features/headerSlice";
import Test from "./Test";
import TodoItem from "./TodoItem";
import Form from "../Form";
import Posts from "./Posts";


const Main = (props) => {
  const dispatch = useDispatch()
 const todos = useSelector((state) => state.todo.todos)
 console.log(todos)
  return (
    <div>
    <input type="text" placeholder="text" onChange={(e) => {dispatch(setHeaderShop(e.target.value))}} className={m.input}/>
    <Test />
   <Form />
    {
      todos.map((todo,index) => (
        <TodoItem key={todo.id} todo={todo}/>
      ))
    }
    <Posts />
    </div>
  )
}

 
export default Main;
