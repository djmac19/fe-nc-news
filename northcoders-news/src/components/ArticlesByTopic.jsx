import React from "react";
import ArticlesList from "./reusable/ArticlesList";

function ArticlesByTopic({ slug }) {
  console.log(slug);
  return <ArticlesList topic={slug} />;
}

export default ArticlesByTopic;
