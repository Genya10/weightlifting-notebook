import React, { useState } from "react";
import cl from "./WeightOnTraining.module.css";
import { TotalPost } from "../TotalPost/TotalPost";

export const WeightOnTraining = () => {
  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);
  const [inputThree, setInputThree] = useState(0);
  const [inputFirst, setInputFirst] = useState(0);

  const [inputFor, setInputFor] = useState(0);
  const [inputFive, setInputFive] = useState(0);
  const [inputSix, setInputSix] = useState(0);
  const [inputSecond, setInputSecond] = useState(0);

  const inputsGroupFirst = () => {
    return setInputFirst(inputOne * inputTwo * inputThree);
  };
  const inputGroupSecond = () => {
    return setInputSecond(inputFor * inputFive * inputSix);
  };

  return (
     <div>
            <input className={cl.inpNumb} onChange={(e)=>setInputOne(Number(e.target.value))}/><span>kg</span>*
            <input className={cl.inpNumb}  onChange={(e)=>setInputTwo(Number(e.target.value))} />*
            <input className={cl.inpNumb}  onChange={(e)=>setInputThree(Number(e.target.value))}/>
            <span className={cl.sum}>{inputFirst}</span>
            <button onClick={inputsGroupFirst}>Sum</button>
            <button onClick={()=>{setInputFirst(0)}}>Reset</button>
            <div>
            <input className={cl.inpNumb}  onChange={(e)=>setInputFor(Number(e.target.value))}/><span>kg</span>*
            <input className={cl.inpNumb}  onChange={(e)=>setInputFive(Number(e.target.value))}/>*
            <input className={cl.inpNumb}  onChange={(e)=>setInputSix(Number(e.target.value))}/>
            <span className={cl.sum}>{inputSecond}</span>
            <button onClick={inputGroupSecond}>Sum</button>
            <button onClick={()=>{setInputSecond(0)}}>Reset</button>
            </div>
            <TotalPost
                inputFirst={inputFirst}
                inputSecond={inputSecond}
                inputTwo={inputTwo}
                inputThree={inputThree}
                inputFive={inputFive}
                inputSix={inputSix}
                />
     </div>
  )
};
