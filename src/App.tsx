import React from 'react';
import './App.css';
import { Photo } from './Photo/Photo';
import { Titles } from './Titles/Titles';
import { TrainingDay } from './TrainingDay/TrainingDay';

function App() {
  return (
    <div className="App">
      <Photo/>
   <h1>Training</h1>
   <TrainingDay/>
   <Titles/>
    </div>
  );
}

export default App;
