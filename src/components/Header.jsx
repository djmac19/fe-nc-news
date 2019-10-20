import React from "react";
import { Link } from "@reach/router";
import styles from "../styling/Header.module.css";

function Header({ loggedInUser }) {
  return (
    <div className={styles.header}>
      <p className={styles.logged_in_user}>
        Logged in as:{" "}
        <strong>
          <Link to={`/articles/users/${loggedInUser}`}>{loggedInUser}</Link>
        </strong>
      </p>
      <h1 className={styles.title}>Northcoders News</h1>
    </div>
  );
}

export default Header;
