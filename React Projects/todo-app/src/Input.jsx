import React, { useState } from "react";
import { BsFillPatchPlusFill } from "react-icons/bs";

const Input = ({ onSubmit }) => {
  const [inputData, setInputData] = useState("");
  const localTime = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: inputData,
      time: localTime.toLocaleTimeString(),
    });
    setInputData("");
  };

  return (
    <div className="inputTextMain">
      <form className="inputText" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button type="submit" className="plusBtn">
          <BsFillPatchPlusFill />
        </button>
      </form>
    </div>
  );
};

export default Input;
