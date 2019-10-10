import React from "react";

function Page({ changePage }) {
  const handleClick = event => {
    console.log("in handleClick");
    const { value } = event.target;
    changePage(value);
  };
  return (
    <section>
      <button value="-1" onClick={handleClick}>
        Prev Page
      </button>
      <button value="1" onClick={handleClick}>
        Next Page
      </button>
    </section>
  );
}

export default Page;
