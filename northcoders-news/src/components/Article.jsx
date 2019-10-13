import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "../styling/Article.module.css";
import * as api from "../utils/api";
import Votes from "./Votes";

class Article extends Component {
  state = { article: null, isLoading: true };

  componentDidMount() {
    const { article_id, updateCount } = this.props;
    api.getArticle(article_id).then(({ article }) => {
      this.setState({ article, isLoading: false });
      updateCount(article.comment_count);
    });
  }

  render() {
    const images = {
      coding:
        "http://downloads.bbc.co.uk/schoolradio/assemblies/images/computer_code.jpg",
      football: "https://ichef.bbci.co.uk/images/ic/1920x1080/p05h62gc.jpg",
      cooking: "https://ichef.bbci.co.uk/images/ic/1920x1080/p031y9w7.jpg"
    };
    const { isLoading } = this.state;
    if (isLoading) {
      return <p>loading...</p>;
    } else {
      const {
        article_id,
        title,
        author,
        topic,
        body,
        created_at,
        votes
      } = this.state.article;
      const { loggedInUser } = this.props;
      const date = new Date(created_at);
      return (
        <section>
          <img className={styles.photo} src={images[topic]} alt={`${topic}`} />
          <h3>{title}</h3>
          <p>
            by <Link to={`/articles/users/${author}`}>{author}</Link>
          </p>
          <p>{body}</p>
          <Votes
            item="articles"
            id={article_id}
            votes={votes}
            author={author}
            loggedInUser={loggedInUser}
          />
          <p>Created: {date.toString().slice(0, 24)}</p>
        </section>
      );
    }
  }
}

export default Article;
