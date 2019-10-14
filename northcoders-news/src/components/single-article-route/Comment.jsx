import React from "react";
import { Link } from "@reach/router";
import DeleteComment from "./DeleteComment";
import Votes from "../reusable/Votes";

function Comment({
  comment_id,
  body,
  author,
  created_at,
  votes,
  loggedInUser,
  removeComment,
  updateCount
}) {
  const date = new Date(created_at);
  return (
    <section>
      <h3>
        <Link to="/articles/users/:username">{author}</Link>
      </h3>
      <p>{body}</p>
      <p>Created At: {date.toString().slice(0, 24)}</p>
      <Votes
        item="comments"
        id={comment_id}
        votes={votes}
        author={author}
        loggedInUser={loggedInUser}
      />
      <DeleteComment
        comment_id={comment_id}
        author={author}
        loggedInUser={loggedInUser}
        removeComment={removeComment}
        updateCount={updateCount}
      />
    </section>
  );
}

export default Comment;
