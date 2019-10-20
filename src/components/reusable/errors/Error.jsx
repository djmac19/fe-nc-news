import React from "react";

function Error({ status, msg }) {
  return (
    <h2>
      {status}: {msg}
    </h2>
  );
}

export default Error;
