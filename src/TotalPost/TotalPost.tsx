import React,{useState,useContext} from "react";
import cl from "./TotalPost.module.css";
import { Context } from "../App";

type PropsTotalPost={
    inputFirst:number,
    inputSecond:number,
    inputTwo:number,
    inputThree:number,
    inputFive:number,
    inputSix:number,   
}


export const TotalPost=(props:PropsTotalPost )=>{

    const {updateTotal,updateTotalNumber} = useContext(Context);
    
    const[total,setTotal]=useState(0);
    const[totalNumber,setTotalNumber]=useState(0);
    const[average,setAverage]=useState(0);

    const getTotal=()=>{
       setTotal(props.inputFirst + props.inputSecond)
       const newTotal = props.inputFirst + props.inputSecond;
       updateTotal(newTotal)
      }
      const getTotalNumber=()=>{
       setTotalNumber((props.inputTwo*props.inputThree)+(props.inputFive*props.inputSix))
      const newTotalNumber = (props.inputTwo*props.inputThree)+(props.inputFive*props.inputSix);
       updateTotalNumber(newTotalNumber);
    }
      const getAverage=()=>{
        setAverage(Number((total/totalNumber).toFixed(2)));      
      }

    return(
        <div className={cl.totalPost}>
      <div className={cl.total}>
        <h4>Total kg:</h4>
        <h5>{total}</h5>kg
        <button className={cl.postBtn} onClick={getTotal}>Total</button>
      </div>
      <div className={cl.total}>
        <h4>Total time:</h4>
        <h5>{totalNumber}</h5>
        <button className={cl.postBtn} onClick={getTotalNumber}>Total</button>
      </div>
      <div className={cl.total}>
        <h4>Average:</h4>
        <h5>{average}</h5>kg
        <button className={cl.postBtn} onClick={getAverage}>Average</button>
      </div>
        </div>
    )
}