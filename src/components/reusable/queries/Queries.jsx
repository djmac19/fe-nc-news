import React from "react";
import styles from "../../../styling/Queries.module.css";
import SortBy from "./SortBy";
import Order from "./Order";
import Limit from "./Limit";

function Queries({ updateQueries, columns, count }) {
  return (
    <div className={styles.queries}>
      <SortBy updateQueries={updateQueries} columns={columns} />
      <Order updateQueries={updateQueries} />
      <Limit count={count} updateQueries={updateQueries} />
    </div>
  );
}

export default Queries;
