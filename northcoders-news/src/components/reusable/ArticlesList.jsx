import React, { Component } from "react";
import * as api from "../../utils/api.js";
import ArticleCard from "./ArticleCard";

class ArticlesList extends Component {
  state = {
    articles: null,
    total_count: null,
    isLoading: true
  };

  componentDidMount() {
    const { sort_by, order, author, topic, limit, p, updateCount } = this.props;
    api
      .getArticles(sort_by, order, author, topic, limit, p)
      .then(({ articles, total_count }) => {
        this.setState({ articles, total_count, isLoading: false });
        if (updateCount) {
          updateCount(total_count);
        }
      });
  }

  componentDidUpdate(prevProps) {
    const queries = ["sort_by", "order", "author", "topic", "limit", "p"];
    const propsChanged = queries.some(
      query => prevProps[query] !== this.props[query]
    );
    if (propsChanged) {
      const { sort_by, order, author, topic, limit, p } = this.props;
      api
        .getArticles(sort_by, order, author, topic, limit, p)
        .then(({ articles, total_count }) =>
          this.setState({ articles, total_count, isLoading: false })
        );
    }
  }

  render() {
    const { articles, isLoading } = this.state;
    return isLoading ? (
      <p>loading...</p>
    ) : (
      <section>
        {articles &&
          articles.map(article => {
            return <ArticleCard key={article.article_id} {...article} />;
          })}
      </section>
    );
  }
}

export default ArticlesList;
