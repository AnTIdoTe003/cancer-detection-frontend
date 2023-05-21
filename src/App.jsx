import React, { useState } from 'react'
import Popup from './Popup/Popup';

const App = () => {
  const [trigger, setTrigger] = useState(false)
  return (
    <div class="bg-primary w-full lg:w-full min-h-screen mx-auto flex flex-col items-center justify-center overflow-hidden ">
      <div class="relative w-full max-w-[768px]">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-5">
        <h1 className="lg:text-[6rem] text-[2rem] ">
          Upload{" "}
          <span className='text-red-600'>Image</span>
        </h1>
        <p className='lg:text-2xl'>and start diagnosis</p>
        <p className='lg:text-xl'>right now!!!</p>
        <input className=' self-center' accept="image/png, image/gif, image/jpeg" type="file"  />
        <button onClick={()=> setTrigger(!trigger)} className='bg-red-100 p-4 rounded-lg'>Popup</button>
        <Popup trigger={trigger} setTrigger ={setTrigger} ></Popup>
      </div>
    </div>
  );
}

export default App