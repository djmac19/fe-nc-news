import React from "react";
import "../../index.css";
import SortBy from "./SortBy";
import Order from "./Order";
import Limit from "./Limit";

function Queries({ updateQueries }) {
  return (
    <section className="FlexColumn">
      <SortBy updateQueries={updateQueries} />
      <Order updateQueries={updateQueries} />
      <Limit updateQueries={updateQueries} />
    </section>
  );
}

export default Queries;
