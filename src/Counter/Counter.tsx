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
            <button onClick={counterPlus}>Attempt</button>
            <button onClick={counterReset}>Reset</button>
        </div>
    )
}