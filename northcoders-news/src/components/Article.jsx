import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import Votes from "./Votes";

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
      const {
        article_id,
        title,
        author,
        body,
        created_at,
        votes
      } = this.state.article;
      const { loggedInUser } = this.props;
      const date = new Date(created_at);
      return (
        <section>
          <h3>{title}</h3>
          <p>
            by <Link to={`/articles/users/${author}`}>{author}</Link>
          </p>
          <p>{body}</p>
          <p>Created: {date.toString().slice(0, 24)}</p>
          <Votes
            item="articles"
            id={article_id}
            votes={votes}
            author={author}
            loggedInUser={loggedInUser}
          />
        </section>
      );
    }
  }
}

export default Article;
