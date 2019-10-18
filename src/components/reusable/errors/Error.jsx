import React from "react";

function Error({ status, msg }) {
  return (
    <p>
      {status}: {msg}
    </p>
  );
}

export default Error;
