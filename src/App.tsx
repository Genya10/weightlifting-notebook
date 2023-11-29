import React,{useState} from 'react';
import './App.css';
import { Photo } from './Photo/Photo';
import { Titles } from './Titles/Titles';
import { TrainingDay } from './TrainingDay/TrainingDay';
import { Posts } from './Posts/Posts';

export type PostsArray= {
  id:number,
  numb:number
  }[];

function App() {

  const [posts,setPosts]=useState<PostsArray>([
    {id:1,numb:1},
    {id:2,numb:2},
    {id:3,numb:3},
  ])
  return (
    <div className="App">
      <Photo/>
   <h1>Training</h1>
   <TrainingDay/>
   <Titles/>
   <Posts posts={posts}/>
    </div>
  );
}

export default App;
