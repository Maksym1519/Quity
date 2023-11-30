import React from "react";
import { ReactDOM } from "react-dom";
import { lazy, Suspense } from "react";
import loadable from "@loadable/component";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
//cpmponents----------------------------------------------------------------------------------------
import store from "./App/store";
import Main from "./components/pages/Main/Main";
import Navigation from "./Navigation";
import Test from "./components/pages/Main/Test";
import Form from "./components/pages/Form";
//styles--------------------------------------------------------------------------------------------
import "./fonts.scss";
import "./style.scss";
//images--------------------------------------------------------------------------------------------

const App = () => {
  return (
    <>
    {
        <nav>
          <Link to="/Navigation">Navigation</Link>
        </nav>
      }
       <Routes>
        <Route
          path="/Navigation"
          element={
            <React.Suspense>
              <Navigation />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/"
          element={
            <React.Suspense>
              <Main />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/Test"
          element={
            <React.Suspense>
              <Test />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/Form"
          element={
            <React.Suspense>
              <Form />
            </React.Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
};
export default App;
