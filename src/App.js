import React, { useState } from "react";
import useStore from "./store";
import "./index.css";

const Calculator = () => {
  const { components, addComponent, clearComponents } = useStore();
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(expression).toString(); // Evaluate expression
        setResult(evalResult); // Set the result
        setExpression(""); // Clear input after showing result
      } catch {
        setResult("Error");
      }
    } else {
      setExpression((prev) => prev + value);
    }
  };

  return (
    <div className="p-5 text-center">
      <h2 className="text-2xl font-bold">Calculator Builder</h2>
      <div className="border-dashed border-2 border-gray-400 p-4 my-4 min-h-[50px]">
        <strong>{expression || "0"}</strong>
      </div>
      <div className="text-xl my-2">
        <strong>Result:</strong> {result}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {"0123456789+-*/=".split("").map((char) => (
          <button
            key={char}
            className="p-2 bg-blue-500 text-white rounded"
            onClick={() => handleClick(char)}
          >
            {char}
          </button>
        ))}
      </div>
      <button
        className="mt-4 p-2 bg-red-500 text-white rounded"
        onClick={() => {
          clearComponents();
          setExpression("");
          setResult(0);
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default Calculator;
