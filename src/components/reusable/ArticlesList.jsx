import React, { Component } from "react";
import * as api from "../../utils/api";
import ArticleCard from "./ArticleCard";
import Error from "./errors/Error";

class ArticlesList extends Component {
  state = {
    articles: null,
    total_count: null,
    isLoading: true,
    error: null
  };

  componentDidMount() {
    const {
      sort_by,
      order,
      author,
      topic,
      limit,
      p,
      updateCount,
      updateError
    } = this.props;
    api
      .getArticles(sort_by, order, author, topic, limit, p)
      .then(({ articles, total_count }) => {
        this.setState({ articles, total_count, isLoading: false, error: null });
        updateError && updateError(false);
        updateCount && updateCount(total_count);
      })
      .catch(error => {
        this.setState({
          error: { msg: error.response.data.msg, status: error.response.status }
        });
        updateError && updateError(true);
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
          this.setState({
            articles,
            total_count,
            isLoading: false,
            error: null
          })
        )
        .catch(error =>
          this.setState({
            error: {
              msg: error.response.data.msg,
              status: error.response.status
            }
          })
        );
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;
    return error ? (
      <Error {...error} />
    ) : isLoading ? (
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
