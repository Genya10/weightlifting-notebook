import React,{useState} from "react";
import cl from "./TrainingDay.module.css";

export const TrainingDay = ()=>{
    
    return(
        <div className={cl.trainingDay}>
            <div>
                <h3 className={cl.titleInTrainingDay}>Data:</h3>
                <input type="text" placeholder="29.11.23" />
            </div>
            <div>
                <h3 className={cl.titleInTrainingDay}>Day of the week:</h3>
                <input type="text" placeholder="Wensday"/>
            </div>
        </div>
    )
}
