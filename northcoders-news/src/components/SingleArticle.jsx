import React from "react";
import Article from "./Article";
import ViewToggler from "./reusable/ViewToggler";
import CommentsList from "./CommentsList";

function SingleArticle({ article_id, loggedInUser }) {
  return (
    <section>
      <Article article_id={article_id} />
      <ViewToggler>
        <CommentsList article_id={article_id} loggedInUser={loggedInUser} />
      </ViewToggler>
    </section>
  );
}

export default SingleArticle;
