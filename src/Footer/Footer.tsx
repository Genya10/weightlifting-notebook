import React, { useState } from "react";
import cl from "./Footer.module.css";

export const Footer = ()=>{

    const [totalAll,setTotalAll]=useState(0);
    const [numbersAll,setNumbersAll]=useState(0);
    const [averageAll,setAverageAll]=useState(0);

    return(
        <div className={cl.footer}>
        <div className={cl.footerCount}>
        <h3 className={cl.titleFooter}>Total kg:</h3>
        <h4 className={cl.footerNumb}>{totalAll} </h4><span>kg</span>
        <button className={cl.footerBtn}>Total</button>
      </div>
      <div className={cl.footerCount}>
        <h3 className={cl.titleFooter}>Total numbers:</h3>
        <h4 className={cl.footerNumb}>{numbersAll} </h4><span>time</span>
        <button className={cl.footerBtn}>Total time</button>
      </div>
      <div className={cl.footerCount}>
        <h3 className={cl.titleFooter}>Average intensive:</h3>
        <h4 className={cl.footerNumb}>{averageAll} </h4><span>kg</span>
        <button className={cl.footerBtn}>Average</button>
  </div>
        </div>
    )
}