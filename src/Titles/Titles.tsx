import React from "react";
import cl from "./Titles.module.css";

export const Titles =()=>{
    return(
        <div className={cl.titles}>
            <h2>Exersice</h2>
            <h3>Weight</h3>
            <h3>Number</h3>
            <h3>Sets</h3>
            <h3>Sum kg</h3>
        </div>
    )
}