import React from "react";

function Page({ limit, p, count, changePage }) {
  const handlePress = direction => {
    changePage(direction);
  };
  return (
    count > limit && (
      <section>
        <button
          onPress={() => {
            handlePress(-1);
          }}
          disabled={p === 1}
        >
          Prev Page
        </button>{" "}
        Page: {p}{" "}
        <button
          onPress={() => {
            handlePress(1);
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
