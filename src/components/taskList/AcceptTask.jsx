import React, { useState } from "react";
import { motion } from "framer-motion";

const AcceptTask = ({ elem }) => {
  const [bgColor, setBgColor] = useState("bg-yellow-500"); // Initial background color
  const [isActionTaken, setIsActionTaken] = useState(false); // Track if a button is clicked

  const handleCompleted = () => {
    setBgColor("bg-green-500"); // Change to green
    setIsActionTaken(true); // Hide buttons
  };

  const handleGiveUp = () => {
    setBgColor("bg-red-500"); // Change to red
    setIsActionTaken(true); // Hide buttons
  };

  return (
    <div className={`${bgColor} rounded p-3 flex flex-col shrink-0 w-full sm:w-[48%] lg:w-[30%] h-auto`}>
      <div className="flex justify-between bg-transparent">
        <h1 className="text-white p-2 rounded font-semibold bg-orange-600">
          {elem.category}
        </h1>
        <h3 className="text-white text-md font-semibold bg-transparent">
          {elem.taskDate}
        </h3>
      </div>
      <h1 className="bg-transparent mt-5 text-xl text-white font-bold">
        {elem.taskTitle}
      </h1>
      <p className="text-white">{elem.taskDescription}</p>
      {!isActionTaken && ( // Only show buttons if no action has been taken
        <div className="flex justify-between text-white pt-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-green-600 p-1 w-1/3 rounded"
            onClick={handleCompleted}
          >
            Completed
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="bg-red-600 p-1 w-1/3 rounded"
            onClick={handleGiveUp}
          >
            Give up
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default AcceptTask;
