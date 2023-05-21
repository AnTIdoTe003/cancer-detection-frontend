import React, { useState } from "react";
import Popup from "./Popup/Popup";
import axios from "axios";
import Loader from "../Loader/Loader";
const App = () => {
  const [image, setImage] = useState(" ");
  // dummyData.map((item) => console.log(item));
  // const [result, setResult] = useState({
  //   status:200
  // });
  const [response, setResponse] = useState({
  });

  const handleImage = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    formDatab.append("image", image);
    await axios
      .post("http://127.0.0.1:5000/predict", formDatab)
      .then((res) => {
       setResponse(JSON.stringify(res));
      })
      .catch((error) => {
        console.log(error);
      });
      setResult(response.data);
  };
  const [trigger, setTrigger] = useState(false);
  console.log(response);
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
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="form flex flex-col items-center justify-center gap-5"
        >
          <input
            className="self-center"
            accept="image/png, image/gif, image/jpeg"
            type="file"
            id="file"
            name="file"
            onChange={handleImage}
          />
          <button className="bg-red-100 p-4 rounded-lg w-[10rem]" type="submit">
            Submit
          </button>
        </form>
        {response.status === 200 ? (
          <>
            <button
              onClick={() => setTrigger(!trigger)}
              className="bg-red-100 p-4 rounded-lg"
            >
              Popup
            </button>
            <Popup data={response.data} trigger={trigger} setTrigger={setTrigger} />
          </>
        ) : (
          <>
            <Loader />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
