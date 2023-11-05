import React, { useState } from "react";
import "./App.css";
import Component from "./Component";

const App = () => {
  const [nums, setnums] = useState([1, 0,2]);
  return (
    <div className="parent">
      {nums.map((num) => (
        <div className="child">
          <Component value={num}/>
        </div>
      ))}
    </div>
  );
};

export default App;
