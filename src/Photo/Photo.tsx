import React from "react";
import cl from './Photo.module.css';

export  const Photo = ()=>{
   return(
    <div className={cl.photo}>
        <img src={'./img/shtangist-1.jpg'} alt="weightlifter-1" width={200}/>
        <img src={'./img/shtangist-2.jpg'} alt="weightlifter-2" width={300}/>
        <img src={'./img/shtangist-3.webp'} alt="weightlifter-3" width={200}/>
    </div>
   )
}

