import React from "react";

function Order({ updateQueries }) {
  const handleClick = event => {
    const { value } = event.target;
    updateQueries("order", value);
  };
  return (
    <form>
      <h4>Order:</h4>
      <select onClick={handleClick}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </form>
  );
}

export default Order;
