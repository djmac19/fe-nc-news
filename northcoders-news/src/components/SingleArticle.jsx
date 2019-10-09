import React from "react";
import { Router } from "@reach/router";
import Article from "./Article";

function SingleArticle({ article_id }) {
  return (
    <section>
      <Article article_id={article_id} />
      <Router path="/comments">{/* <CommentsList /> */}</Router>
    </section>
  );
}

export default SingleArticle;
