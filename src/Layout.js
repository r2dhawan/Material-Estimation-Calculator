import React, { useState } from "react";
import MaterialEstimationCalculator from "./MaterialEstimationCalculator";

const Layout = () => {
  const [activeTab, setActiveTab] = useState("materialEstimation");

  const renderCalculator = () => {
    switch (activeTab) {
      case "materialEstimation":
        return <MaterialEstimationCalculator />;
      // Add other calculator components here as per your project
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Construction Calculator Suite</h1>
      <ul>
        <li onClick={() => setActiveTab("materialEstimation")}>
          Material Estimation
        </li>
        {/* Add other calculator tabs here as per your project */}
      </ul>
      {renderCalculator()}
    </div>
  );
};

export default Layout;
