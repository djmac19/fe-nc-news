import React from "react";
import { Link } from "@reach/router";
import ArticlesList from "./reusable/ArticlesList";

function Home() {
  return (
    <section>
      {/* <section className="FlexRow">
        <section> */}
      <h2>Recently Added</h2>
      <ArticlesList limit="5" />
      {/* </section>
        <section>
          <h2>Highest Voted</h2>
          <ArticlesList sort_by="votes" limit="5" />
        </section>
      </section> */}
      <button>
        <Link to="/articles">See more articles....</Link>
      </button>
    </section>
  );
}

export default Home;
