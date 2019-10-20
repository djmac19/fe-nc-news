import React from "react";

function Limit({ count, updateQueries }) {
  const handleClick = event => {
    const { value } = event.target;
    updateQueries("limit", value);
  };
  return (
    <form>
      <h4>Per Page:</h4>
      <select onClick={handleClick}>
        <option value="10">10</option>
        {count > 10 && <option value="20">20</option>}
        {count > 20 && <option value="30">30</option>}
        {count > 30 && <option value="40">40</option>}
        {count > 40 && <option value="50">50</option>}
        {count > 50 && <option value="100">100</option>}
      </select>
    </form>
  );
}

export default Limit;
