import React from "react";
import m from "./main.module.scss";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setHeaderShop } from "../../../features/headerSlice";
import Test from "./Test";


const Main = (props) => {
  const dispatch = useDispatch()
 
  return (
    <div>
    <input type="text" placeholder="text" onChange={(e) => {dispatch(setHeaderShop(e.target.value))}} className={m.input}/>
    <Test />
    </div>
  )
}

 
export default Main;
