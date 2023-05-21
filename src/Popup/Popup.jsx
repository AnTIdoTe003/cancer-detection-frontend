import React, { useEffect, useRef } from "react";

const Popup = ({ trigger, setTrigger, data }) => {
    const dummyData = [
      {
        number: 0,
        type: "Adenocarcinoma",
      },
      {
        number: 1,
        type: "Large Cell Carcinoma",
      },
      {
        number: 2,
        type: "Normal",
      },
      {
        number: 3,
        type: "Squamous Cell Carcinoma",
      },
    ];
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
        <div ref={ref} className="bg-white h-72 w-72 rounded-md flex justify-center items-center">{
          dummyData.filter((ele)=>{return ele.number ===data}).map((ele)=>{
            return(
              <h2>
                {ele.type}
              </h2>
            )
          })
        }</div>
      </div>
    </>
  ) : (
    ""
  );
};

export default Popup;
