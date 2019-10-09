import React from "react";
import { Link } from "@reach/router";
import ArticlesList from "./reusable/ArticlesList";

function Home() {
  return (
    <section>
      <h2>Recently Added</h2>
      <ArticlesList />
      <button>
        <Link to="/articles">See more articles....</Link>
      </button>
    </section>
  );
}

export default Home;
