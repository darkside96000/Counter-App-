import { useState } from 'react';
import './App.css';

function App() {

  const[count,setCount]=useState(0);
  function clickd(){
    setCount(count-1);

  }
  function clicki(){
    setCount(count+1);
  }
  function resethandler(){
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap 50">
      <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={clickd} className='border-r-2 text-center w-20 border-[black] text-5xl'>
          -
        </button>

        <div className='font-Bold gap-12 text-5xl'>
          {count}

        </div>
        <button onClick={clicki} className='border-l-2 text-center w-20 border-[Black] text-5xl'>
          +
        </button>
      </div>
      <button onClick={resethandler} className='bg-[#0398d4] text-white px-5 py-1 rounded-sm text-lg'>
        Reset 
      </button>
     
    </div>
  );
}

export default App;
