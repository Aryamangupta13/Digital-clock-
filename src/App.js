import React, { useState } from "react";
import { ReactDOM } from "react-dom";
import './App.css'

const App=()=>{
  let time=new Date().toLocaleTimeString();
  const state=useState();
  const [ct,setT]=useState();
  let fun=()=>{
    time=new Date().toLocaleTimeString();
    setT(time);
  }
  setInterval(fun,1000);
  return(
    <div className="box">
      <h1>{time}</h1>
    </div>
  )
}
export default App;