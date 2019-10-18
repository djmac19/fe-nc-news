import React from "react";
import "../../../index.css";
import SortBy from "./SortBy";
import Order from "./Order";
import Limit from "./Limit";

function Queries({ updateQueries, columns }) {
  return (
    <section className="FlexColumn">
      <SortBy updateQueries={updateQueries} columns={columns} />
      <Order updateQueries={updateQueries} />
      <Limit updateQueries={updateQueries} />
    </section>
  );
}

export default Queries;
