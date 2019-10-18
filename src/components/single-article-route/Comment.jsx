import React from "react";
import { Link } from "@reach/router";
import styles from "../../styling/Comment.module.css";
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
    <section className={styles.comment}>
      <h3 className={styles.author}>
        <Link to="/articles/users/:username">{author}</Link>
      </h3>
      <p className={styles.created_at}>
        Date Created: <br /> {date.toString().slice(0, 24)}
      </p>
      <p className={styles.body}>{body}</p>
      <Votes
        className={styles.votes}
        item="comments"
        id={comment_id}
        votes={votes}
        author={author}
        loggedInUser={loggedInUser}
      />
      <div className={styles.delete}>
        <DeleteComment
          comment_id={comment_id}
          author={author}
          loggedInUser={loggedInUser}
          removeComment={removeComment}
          updateCount={updateCount}
        />
      </div>
    </section>
  );
}

export default Comment;
