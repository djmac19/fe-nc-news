import React from "react";
import styles from "../../../styling/Errors.module.css";

function Error({ status, msg }) {
  return (
    <h2 className={styles.errors}>
      {status}: {msg}
    </h2>
  );
}

export default Error;
