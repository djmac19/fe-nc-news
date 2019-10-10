import React from "react";
import Article from "./Article";
import ViewToggler from "./reusable/ViewToggler";
import CommentsList from "./CommentsList";

function SingleArticle({ article_id }) {
  return (
    <section>
      <Article article_id={article_id} />
      <ViewToggler>
        <CommentsList article_id={article_id} />
      </ViewToggler>
    </section>
  );
}

export default SingleArticle;
