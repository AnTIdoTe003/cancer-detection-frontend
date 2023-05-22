import React, { useEffect, useRef, useState } from "react";

const Popup = ({ trigger, setTrigger, data }) => {
  const [result, setResult]= useState("")
  console.log(data.prediction);
  if(data.prediction==0){
      setResult("Adenocarcinoma");
  } if (data.prediction == 1) {
     setResult("Lage Cell Carcinnoma");
  } if(data.prediction ==2){
    setResult("Normal");
  } if (data.prediction ==3){
 setResult("Squamous Cell Carcinoma");
  }
  console.log(result)
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
        <div ref={ref} className="text-black bg-white h-72 w-72 rounded-md flex justify-center items-center">
        {/* <h2>{result}</h2> */}
        {data.prediction}
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default Popup;
