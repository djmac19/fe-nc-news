import React from "react";
import { Link } from "@reach/router";

function ArticleCard({ article_id, title, votes, created_at }) {
  const date = new Date(created_at);
  return (
    <section>
      <h1>
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </h1>
      <p>Votes: {votes}</p>
      <p>Created At: {date.toDateString()}</p>
    </section>
  );
}

export default ArticleCard;
