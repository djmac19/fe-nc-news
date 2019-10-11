import React from "react";
import * as api from "../utils/api";

function DeleteComment({ comment_id, author, loggedInUser, removeComment }) {
  const handleClick = () => {
    api.deleteComment(comment_id);
    removeComment(comment_id);
  };

  return (
    author === loggedInUser && <button onClick={handleClick}>Delete</button>
  );
}

export default DeleteComment;
