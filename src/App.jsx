import React, { useState } from "react";
import Popup from "./Popup/Popup";
import axios from "axios";
const App = () => {
  const dummyData = [
    {
      0: "Adenocarcinoma",
      1: "Large Cell Carcinoma",
      2: "Normal",
      3: "Sqaumous Cell Carcinoma",
    },
  ];
  dummyData.map((item) => console.log(item));
  const [result, setResult] = useState("Please upload the image correctly");
  const [response, setResponse] = useState({});
  const handleSubmit = async (e) => {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    await axios
      .post("http://127.0.0.1:5000/predict", formDatab)
      .then((res) => {
        console.log(setResponse(JSON.stringify(res.data)));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [trigger, setTrigger] = useState(false);
  console.log(response)
  return (
    <div className="bg-primary w-full lg:w-full min-h-screen mx-auto flex flex-col items-center justify-center overflow-hidden ">
      <div className="relative w-full max-w-[768px]">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-5">
        <h1 className="lg:text-[6rem] text-[2rem] ">
          Cancer Prediction System
        </h1>
        <h1 className="lg:text-[6rem] text-[2rem] ">
          Upload <span className="text-red-600">Image</span>
        </h1>
        <p className="lg:text-2xl">and start diagnosis</p>
        <p className="lg:text-xl">right now!!!</p>
        <form onSubmit={(e) => handleSubmt(e)} className="form">
          <input
            className="self-center"
            accept="image/png, image/gif, image/jpeg"
            type="file"
            id="file"
          />
          <button className="bg-red-100 p-4 rounded-lg" type="submit">Submit</button>
        </form>
        <button
          onClick={() => setTrigger(!trigger)}
          className="bg-red-100 p-4 rounded-lg"
        >
          Popup
        </button>
        <Popup trigger={trigger} setTrigger={setTrigger}></Popup>
      </div>
    </div>
  );
};

export default App;
