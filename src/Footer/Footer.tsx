import React, { useState,useContext } from "react";
import cl from "./Footer.module.css";

type PropsFooter ={
 total:any,
 totalNumber:any,
}

export const Footer = (props:PropsFooter)=>{

    const [totalAll,setTotalAll]=useState(0);
    const [numbersAll,setNumbersAll]=useState(0);
    const [averageAll,setAverageAll]=useState(0);

    const getAllTotal =()=>{
        let count = 0;
        //let arr = props.total;
        for(let i = 0; i < props.total.length;i++){
          count += props.total[i];
        }
        setTotalAll(count);
    }
    const getAllNumbers =()=>{
        let count = 0;
        //let arr = props.totalNumber;
        for(let i = 0; i< props.totalNumber.length; i++){
            count += props.totalNumber[i]
        }
        setNumbersAll(count)
    }
    const getAllAverage=()=>{
        setAverageAll(Number((totalAll/numbersAll).toFixed(2)));
    }

    return(
        <div className={cl.footer}>
        <div className={cl.footerCount}>
        <h3 className={cl.titleFooter}>Total kg:</h3>
        <h4 className={cl.footerNumb}>{totalAll} </h4><span>kg</span>
        <button onClick={getAllTotal} 
             className={cl.footerBtn}>Total</button>
      </div>
      <div className={cl.footerCount}>
        <h3 className={cl.titleFooter}>Total numbers:</h3>
        <h4 className={cl.footerNumb}>{numbersAll} </h4><span>time</span>
        <button onClick={getAllNumbers}
              className={cl.footerBtn}>Total time</button>
      </div>
      <div className={cl.footerCount}>
        <h3 className={cl.titleFooter}>Average intensive:</h3>
        <h4 className={cl.footerNumb}>{averageAll} </h4><span>kg</span>
        <button onClick={getAllAverage}
            className={cl.footerBtn}>Average</button>
  </div>
        </div>
    )
}