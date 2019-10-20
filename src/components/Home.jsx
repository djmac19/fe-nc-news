import React from "react";
import { Link } from "@reach/router";
import ArticlesList from "./reusable/ArticlesList";

function Home() {
  return (
    <section>
      <h2>Recently Added</h2>
      <ArticlesList limit="5" />
      <button>
        <Link to="/articles">See More Articles</Link>
      </button>
    </section>
  );
}

export default Home;
