import React, { useState } from "react";
import { motion } from "framer-motion";

const NewTask = ({ elem }) => {
  const [bgColor, setBgColor] = useState("bg-blue-500"); // State to manage background color
  const [acceptClicked, setAcceptClicked] = useState(false); // State to track Accept button behavior
  const [showButtons, setShowButtons] = useState(true); // State to control button visibility
  const data = JSON.parse(localStorage.getItem("employees")) || [];
  const handleAccept = () => {
    if (!acceptClicked) {
      setBgColor("bg-yellow-500");
      
      setAcceptClicked(true); // Change button text to "Completed"
    } else {
      setBgColor("bg-green-500"); // Change background color to green
      setShowButtons(false); // Hide buttons
    }
  };

  const handleReject = () => {
    setBgColor("bg-red-500"); // Change background color to red
    setShowButtons(false); // Hide buttons
  };

  return (
    <div
      className={`${bgColor} rounded p-3 flex flex-col shrink-0 w-full sm:w-[48%] lg:w-[30%] h-auto`}
    >
      <div className="flex justify-between bg-transparent">
        <h1 className="text-white p-2 rounded font-semibold bg-orange-600">
          {elem.category}
        </h1>
        <h3 className="text-white text-md font-semibold bg-transparent">
          {elem.taskDate}
        </h3>
      </div>
      <h1 className="bg-transparent mt-5 text-2xl text-white font-bold">
        {elem.taskTitle}
      </h1>
      <p className="text-white">{elem.taskDescription}</p>
      {showButtons && (
        <div className="flex justify-between text-white pt-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-green-600 p-1 w-1/3 rounded"
            onClick={handleAccept}
          >
            {acceptClicked ? "Completed" : "Accept"}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-red-600 p-1 w-1/3 rounded"
            onClick={handleReject}
          >
           {acceptClicked ? "Give Up" : "Reject"}
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default NewTask;
