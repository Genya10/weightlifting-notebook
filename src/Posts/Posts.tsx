import React from "react";
import { PostsArray } from "../App";
import { Main } from "../Main/Main";
import cl from "./Posts.module.css";

type PostsProps={
    posts:PostsArray
}

export const Posts=(props:PostsProps)=>{
    return(
        <div className={cl.posts}>
      {props.posts.map(post=>(
        <Main key={post.id} id={post.id} numb={post.numb}/>)   
      )}
       </div>
    )
}