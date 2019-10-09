import React from "react";

function SortBy({ updateQueries }) {
  const handleClick = event => {
    const { value } = event.target;
    updateQueries("sort_by", value);
  };
  return (
    <form>
      <h4>Sort By:</h4>
      <select onClick={handleClick}>
        <option value="created_at">Date Added</option>
        <option value="votes">Votes</option>
      </select>
    </form>
  );
}

export default SortBy;
