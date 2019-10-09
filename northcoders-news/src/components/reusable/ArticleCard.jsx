import React from "react";
import { Link } from "@reach/router";

function ArticleCard({ article_id, title, votes, created_at }) {
  const date = new Date(created_at);
  return (
    <ul key={article_id}>
      <li>
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </li>
      <li>Votes: {votes}</li>
      <li>Created At: {date.toDateString()}</li>
    </ul>
  );
}

export default ArticleCard;
