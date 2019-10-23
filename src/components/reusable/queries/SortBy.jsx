import React from "react";

function SortBy({ updateQueries, columns }) {
  const handleChange = event => {
    const { value } = event.target;
    updateQueries("sort_by", value);
  };
  const columnsEntries = Object.entries(columns);
  return (
    <form>
      <h4>Sort By:</h4>
      <select onChange={handleChange}>
        {columnsEntries.map((column, i) => {
          return (
            <option key={i} value={column[0]}>
              {column[1]}
            </option>
          );
        })}
      </select>
    </form>
  );
}

export default SortBy;
