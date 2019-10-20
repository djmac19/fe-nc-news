import React from "react";
import * as api from "../../utils/api";

function DeleteComment({
  comment_id,
  author,
  loggedInUser,
  removeComment,
  updateCount
}) {
  const handleClick = () => {
    api.deleteComment(comment_id);
    removeComment(comment_id);
    updateCount(-1);
  };

  return (
    author === loggedInUser && (
      <button onClick={handleClick}>Delete My Comment</button>
    )
  );
}

export default DeleteComment;
