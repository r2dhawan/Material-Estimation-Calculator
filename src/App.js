import React, { useState } from "react";
import MaterialEstimationCalculator from "./MaterialEstimationCalculator";
import Dashboard from "./Dashboard";
import ItemList from "./ItemList";

const App = () => {
  const [materialCost, setMaterialCost] = useState(0);
  const [isDashboardVisible, setDashboardVisible] = useState(false);
  const [calculatedItems, setCalculatedItems] = useState([]);

  const handleMaterialCostUpdate = (cost, name) => {
    setMaterialCost(cost);
    const newItem = { type: name || "Material Cost", value: cost };
    setCalculatedItems((prevItems) => [...prevItems, newItem]);
  };

  const handleToggleView = () => {
    setDashboardVisible(!isDashboardVisible);
  };

  const handleToggleItemList = () => {
    setDashboardVisible(false);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = calculatedItems.filter((item, i) => i !== index);
    setCalculatedItems(updatedItems);
  };

  return (
    <div>
      <div className="header">
        <button onClick={handleToggleView}>
          {isDashboardVisible ? "Show Calculator" : "Show Dashboard"}
        </button>
        <button onClick={handleToggleItemList}>
          {isDashboardVisible ? "Hide List" : "Show List"}
        </button>
      </div>
      {isDashboardVisible ? (
        <Dashboard
          materialCost={materialCost}
          calculatedItems={calculatedItems}
          onDeleteItem={handleDeleteItem} // Pass onDeleteItem to the Dashboard component
        />
      ) : (
        <MaterialEstimationCalculator
          onMaterialCostUpdate={handleMaterialCostUpdate}
        />
      )}
      {isDashboardVisible ? null : (
        <ItemList items={calculatedItems} onDeleteItem={handleDeleteItem} />
      )}
    </div>
  );
};

export default App;
