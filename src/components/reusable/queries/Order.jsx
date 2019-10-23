import React from "react";

function Order({ updateQueries }) {
  const handleChange = event => {
    const { value } = event.target;
    updateQueries("order", value);
  };
  return (
    <form>
      <h4>Order:</h4>
      <select onChange={handleChange}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </form>
  );
}

export default Order;
