import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";

class Article extends Component {
  state = { article: null, isLoading: true };

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticle(article_id).then(({ article }) => {
      this.setState({ article, isLoading: false });
    });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <p>loading...</p>;
    } else {
      const { title, author, body, created_at } = this.state.article;
      const date = new Date(created_at);
      return (
        <section>
          <h3>{title}</h3>
          <p>
            by <Link to={`/articles/users/${author}`}>{author}</Link>
          </p>
          <p>{body}</p>
          <p>Created: {date.toDateString()}</p>
        </section>
      );
    }
  }
}

export default Article;
