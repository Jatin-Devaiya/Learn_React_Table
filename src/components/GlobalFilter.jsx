import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      Search:{" "}
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        style={{ width: "1000px", height: "30px", margin: "15px" }}
      />
    </span>
  );
};

export default GlobalFilter;
