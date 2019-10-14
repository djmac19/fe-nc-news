import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "../../styling/Article.module.css";
import * as api from "../../utils/api";
import Votes from "../reusable/Votes";
import Error from "../reusable/errors/Error";

class Article extends Component {
  state = { article: null, isLoading: true, error: null };

  componentDidMount() {
    const { article_id, updateCount } = this.props;
    api
      .getArticle(article_id)
      .then(({ article }) => {
        this.setState({ article, isLoading: false, error: null });
        updateCount(article.comment_count);
      })
      .catch(error => {
        this.setState({
          error: {
            msg: error.response.data.msg,
            status: error.response.status
          }
        });
      });
  }

  render() {
    const images = {
      coding:
        "http://downloads.bbc.co.uk/schoolradio/assemblies/images/computer_code.jpg",
      football: "https://ichef.bbci.co.uk/images/ic/1920x1080/p05h62gc.jpg",
      cooking: "https://ichef.bbci.co.uk/images/ic/1920x1080/p031y9w7.jpg"
    };
    const { article, isLoading, error } = this.state;
    const { loggedInUser } = this.props;
    // const date = new Date(article.created_at);
    return error ? (
      <Error {...error} />
    ) : isLoading ? (
      <p>loading...</p>
    ) : (
      article && (
        <section>
          <img
            className={styles.photo}
            src={images[article.topic]}
            alt={`${article.topic}`}
          />
          <h3>{article.title}</h3>
          <p>
            by{" "}
            <Link to={`/articles/users/${article.author}`}>
              {article.author}
            </Link>
          </p>
          <p>{article.body}</p>
          <Votes
            item="articles"
            id={article.article_id}
            votes={article.votes}
            author={article.author}
            loggedInUser={loggedInUser}
          />
          <p>Created: {new Date(article.created_at).toString().slice(0, 24)}</p>
        </section>
      )
    );
  }
}

export default Article;
