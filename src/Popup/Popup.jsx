import React, { useEffect, useRef } from "react";

const Popup = ({ trigger, setTrigger }) => {
    const ref = useRef(null)
    useEffect((e)=>{
        const checkIfClickedOutside =()=>{
            if(ref.current && !ref.current.contains(e.target)){
                setTrigger(false)
            }

        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return()=>{
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }

    })
  return trigger ? (
    <>
      <div onClick={()=>setTrigger(false)} className="bg-white/[0.6] flex justify-center items-center h-full w-full fixed backdrop-blur-xl ">
        <div ref={ref} className="bg-white h-72 w-72 rounded-md flex justify-center items-center">Your Popup</div>
      </div>
    </>
  ) : (
    ""
  );
};

export default Popup;
