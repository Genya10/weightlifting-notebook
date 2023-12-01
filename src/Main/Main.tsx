import React from "react";
import cl from "./Main.module.css";
import { Counter } from "../Counter/Counter";
import { WeightOnTraining } from "../WeightOnTraining/WeightOnTraining";

type MainProps={
    id:number,
    numb:number
}

export const Main=(props:MainProps)=>{
    return(
        <div className={cl.main}>
            <div>
           <b>{props.numb}</b>
           <input className={cl.inputExersice} type="text" placeholder="exersice"/>
           <Counter/>
           </div>
           <div>
          <WeightOnTraining/>
           </div>
        </div>
    )
}