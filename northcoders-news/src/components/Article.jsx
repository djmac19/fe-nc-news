import React, { Component } from "react";
import * as api from "../utils/api";

class Article extends Component {
  state = { article: null, isLoading: true };

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticle(article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <p>loading...</p>;
    } else {
      const { title, author, body, created_at } = this.state.article;
      return (
        <section>
          <h3>{title}</h3>
          <p>{author}</p>
          <p>{body}</p>
          <p>{created_at}</p>
        </section>
      );
    }
  }
}

export default Article;
