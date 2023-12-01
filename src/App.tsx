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

  const [postTotals, setPostTotals] = useState<{ total: number; totalNumber: number }[]>([]);
  const addPostTotal = (postTotal: { total: number; totalNumber: number }) => {
    setPostTotals((prevPostTotals) => [...prevPostTotals, postTotal]);
  };

  const [posts,setPosts]=useState<PostsArray>([
    {id:1,numb:1},
    {id:2,numb:2},
    {id:3,numb:3},
  ])

  const [total,setTotal] = useState<number[]>([]);
  console.log(total);
  const [totalNumber,setTotalNumber] = useState<number[]>([]);
  console.log(totalNumber);
  const updateTotal = (newTotal:number)=> setTotal((prevTotal)=>[...prevTotal,newTotal]);
  const updateTotalNumber = (newTotalNumber:number)=>setTotalNumber((prevTotalNumber)=>[...prevTotalNumber,newTotalNumber]);
  //const contextValue ={
 //   updateTotal,
  //  updateTotalNumber
  //}
  return (
    <Context.Provider value={{updateTotal,updateTotalNumber}}>

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
