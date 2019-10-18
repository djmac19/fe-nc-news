import React from "react";
import { Link } from "@reach/router";
import styles from "../styling/Header.module.css";

function Header({ loggedInUser }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Northcoders News</h1>
      <h5 className={styles.logged_in_user}>
        Logged in as:{" "}
        <Link to={`/articles/users/${loggedInUser}`}>{loggedInUser}</Link>
      </h5>
    </div>
  );
}

export default Header;
