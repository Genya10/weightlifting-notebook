import React,{useState} from "react";
import cl from "./Counter.module.css";

export const Counter =()=>{

    const [counter,setCounter] = useState(0);

    const counterPlus=()=>{
        setCounter(counter+1)
    };
    const counterReset=()=>{
        setCounter(0)
    }

    return(
        <div>
            <span>{counter}</span>
            <button className={cl.btnCounter} onClick={counterPlus}>Attempt</button>
            <button className={cl.btnCounter} onClick={counterReset}>Reset</button>
        </div>
    )
}