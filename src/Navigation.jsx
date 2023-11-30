import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Main from "./components/pages/Main/Main";

 const Navigation = () => {
    return (
         <nav class='navLinks__wrapper'>
            <div class='navLink'><Link to="/">Home</Link></div>
            <div class='navLink'><Link to="/">Home</Link></div>
            <div class='navLink'><Link to="/">Home</Link></div>
         </nav>
    )
}

export default Navigation;