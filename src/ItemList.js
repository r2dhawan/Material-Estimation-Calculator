import React from "react";

const ItemList = ({ items, onDeleteItem }) => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h2>Calculated Items List</h2>
      {items.length > 0 ? (
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
            {items.map((item, index) => (
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
  );
};

export default ItemList;
