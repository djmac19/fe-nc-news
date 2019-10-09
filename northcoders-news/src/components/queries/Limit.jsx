import React from "react";

function Limit({ updateQueries }) {
  const handleClick = event => {
    const { value } = event.target;
    updateQueries("limit", value);
  };
  return (
    <form>
      <h4>Results per page:</h4>
      <select onClick={handleClick}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </form>
  );
}

export default Limit;
