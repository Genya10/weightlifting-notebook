import React,{useState} from "react";
import cl from "./Counter.module.css";

export const Counter =()=>{

    const [counter,setCounter] = useState(0);
    return(
        <div>
            <span>{counter}</span>
            <button>Attempt</button>
            <button>Reset</button>
        </div>
    )
}