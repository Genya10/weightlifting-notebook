import React from "react";
import cl from "./Main.module.css";
import { PostsArray } from "../App";


type MainProps={
    id:number,
    numb:number
}

export const Main=(props:MainProps)=>{
    return(
        <div className={cl.main}>
           <b>{props.numb}</b>
           <input type="text" placeholder="exersice"/>
        </div>
    )
}