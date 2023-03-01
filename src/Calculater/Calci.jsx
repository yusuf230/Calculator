import React, { useState } from "react";

function Calci() {
  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-"];

  const updatecal = value => {
    if( ops.includes(value) && cal === "" || 
       ops.includes(value) && ops.includes(cal.slice(-1)) 
    ){
      return;
    }
   setCal(cal + value)
   if(!ops.includes(value)){
    setResult(eval(cal + value).toString())
   }
  };
  const equl = () =>{
    setCal(eval(cal).toString())
  };
  const deletelast = () =>{
   if(cal === "" )
  {
    return;
  };
  const value = cal.slice(0,-1)
  setCal(value);

  };
  const Createdigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updatecal(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };
  return (
    <div className="app">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""}
          {cal || "0"}
        </div>
        <div className="oprater">
          <button onClick={() => updatecal("/")}>/</button>
          <button onClick={() => updatecal("+")}>+</button>
          <button onClick={() => updatecal("-")}>-</button>
          <button onClick={() => updatecal("*")}>*</button>

          <button onClick={deletelast}>Del</button>
        </div>
        <div className="digits">
              { Createdigits() }
          <button onClick={() => updatecal("0")}>0</button>
          <button onClick={() => updatecal(".")}>.</button>
          <button onClick={equl}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calci;
