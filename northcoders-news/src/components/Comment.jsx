import React from "react";
import { Link } from "@reach/router";

function Comment({ body, author, created_at, votes }) {
  const date = new Date(created_at);
  return (
    <section>
      <h3>
        <Link to="/articles/users/:username">{author}</Link>
      </h3>
      <p>{body}</p>
      <p>Votes: {votes}</p>
      <p>Created At: {date.toDateString()}</p>
    </section>
  );
}

export default Comment;
