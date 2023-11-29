import React from "react";
import { PostsArray } from "../App";
import { Main } from "../Main/Main";

type PostsProps={
    posts:PostsArray
}

export const Posts=(props:PostsProps)=>{
    return(
        <div>
      {props.posts.map(post=>(
        <Main key={post.id} id={post.id} numb={post.numb}/>)   
      )}
       </div>
    )
}