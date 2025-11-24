import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

let counter=0;
function App() {

let [counter , setCounter] =useState(0);


  const increse=()=>{
  setCounter(prev=>prev+1);
}

const decrese=()=>{
  if(counter<=0) return;
  counter-=1;
  setCounter(prev=>prev-1);
}

return(
  <>
  <h1>counter values : {counter} </h1>
  <br />
  <button onClick={increse}>increse</button>
  <br />
  <button onClick={decrese}>decrese</button>
  
  </>
)
}

export default App
