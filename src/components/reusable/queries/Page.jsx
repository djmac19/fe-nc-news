import React from "react";

function Page({ limit, p, count, changePage }) {
  const handleClick = direction => {
    changePage(direction);
  };
  return (
    count > limit && (
      <section>
        <button
          onClick={() => {
            handleClick(-1);
          }}
          disabled={p === 1}
        >
          Prev Page
        </button>{" "}
        Page: {p}{" "}
        <button
          onClick={() => {
            handleClick(1);
          }}
          disabled={count <= limit * p}
        >
          Next Page
        </button>
      </section>
    )
  );
}

export default Page;
