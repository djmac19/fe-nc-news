import React from "react";
import { Link } from "@reach/router";

function ArticleCard({ article_id, title, author, votes, created_at }) {
  const date = new Date(created_at);
  return (
    <section>
      <h3>
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </h3>
      <p>
        by <Link to={`/articles/users/${author}`}>{author}</Link>
      </p>
      <p>Votes: {votes}</p>
      <p>Created At: {date.toString().slice(0, 24)}</p>
    </section>
  );
}

export default ArticleCard;
