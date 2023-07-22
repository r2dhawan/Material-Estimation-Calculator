import React, { useState } from "react";
import "./MaterialEstimationCalculator.css"; // Import the CSS file

const MaterialEstimationCalculator = ({ onMaterialCostUpdate }) => {
  const [name, setName] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [price, setPrice] = useState("");
  const [numberOfUnits, setNumberOfUnits] = useState(0);
  const [result, setResult] = useState(0);

  const calculateMaterial = () => {
    const materialCost = calculateMaterialLogic(
      length,
      width,
      height,
      price,
      numberOfUnits
    );
    setResult(materialCost);
    onMaterialCostUpdate(materialCost, name); 
  };

  const calculateMaterialLogic = (
    length,
    width,
    height,
    price,
    numberOfUnits
  ) => {
    
    return (length * width * height * price * numberOfUnits).toFixed(2); 
  };

  return (
    <div className="material-estimation-calculator">
      <h2>Material Estimation Calculator</h2>
      <div className="input-container">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Length:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </label>
        <label>
          Width:
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </label>
        <label>
          Height:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <label>
          Price per unit:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Number of units:
          <input
            type="number"
            value={numberOfUnits}
            onChange={(e) => setNumberOfUnits(e.target.value)}
          />
        </label>
      </div>
      <div className="button-container">
        <button onClick={calculateMaterial}>Calculate</button>
      </div>
      <div className="result-container">
        <p>Material Cost: ${result}</p>
      </div>
    </div>
  );
};

export default MaterialEstimationCalculator;
