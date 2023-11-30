import React,{useState,createContext} from 'react';
import './App.css';
import { Photo } from './Photo/Photo';
import { Titles } from './Titles/Titles';
import { TrainingDay } from './TrainingDay/TrainingDay';
import { Posts } from './Posts/Posts';
import { Footer } from './Footer/Footer';

export const Context = createContext({
  updateTotal: (newTotal: number) => {},
  updateTotalNumber: (newTotalNumber: number) => {},
});

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

  const [total,setTotal] = useState(0);
  console.log(total);
  const [totalNumber,setTotalNumber] = useState(0);
 console.log(totalNumber);
  const updateTotal = (newTotal:number)=> setTotal(newTotal);
  const updateTotalNumber = (newTotalNumber:number)=>setTotalNumber(newTotalNumber);
  const contextValue ={
    updateTotal,
    updateTotalNumber
  }
  return (
    <Context.Provider value={contextValue}>

    <div className="App">
      <Photo/>
   <h1>Training</h1>
   <TrainingDay/>
   <Titles/>
   <Posts posts={posts}/>
   <Footer 
      total ={total}
      totalNumber={totalNumber}/>
    </div>
    </Context.Provider>
  );
}

export default App;
