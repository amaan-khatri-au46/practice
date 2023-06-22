import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Dummy } from "./components/Dummy";

export const App = () => {
  return (
    <div className="App">
      <Counter/> 
      <Dummy/>
    </div>
  );
};  
