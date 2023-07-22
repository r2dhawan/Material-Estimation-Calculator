import React from "react";

const Dashboard = ({ materialCost, calculatedItems, onDeleteItem }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h2>Construction Calculator Dashboard</h2>
      <p>
        Welcome to the Construction Calculator Suite! This app provides a
        collection of construction-related calculators to help you estimate
        material quantities and costs for your projects.
      </p>
      <div style={{ marginBottom: "20px" }}>
        <h3>Material Estimation Calculator</h3>
        <p>Material Cost: ${materialCost}</p>
      </div>
      <div>
        <h3>Calculated Items</h3>
        {calculatedItems.length > 0 ? (
          <table
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "5px",
                    textAlign: "left",
                  }}
                >
                  Name
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    padding: "5px",
                    textAlign: "left",
                  }}
                >
                  Value
                </th>
                <th style={{ border: "1px solid black", padding: "5px" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {calculatedItems.map((item, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {item.type}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    ${item.value}
                  </td>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    <button onClick={() => onDeleteItem(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No calculated items yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
