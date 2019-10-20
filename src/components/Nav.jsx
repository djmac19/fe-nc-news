import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api";
import styles from "../styling/Nav.module.css";
import Error from "./reusable/errors/Error";

class Nav extends Component {
  state = { topics: null, isLoading: true, error: null };

  componentDidMount() {
    api
      .getTopics()
      .then(({ topics }) =>
        this.setState({ topics, isLoading: false, error: null })
      )
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
    const { topics, isLoading, error } = this.state;
    return error ? (
      <Error {...error} />
    ) : isLoading ? (
      <p>loading...</p>
    ) : (
      <nav className={styles.navbar}>
        <h3 key="home">
          <Link to="/">HOME</Link>
        </h3>
        {topics &&
          topics.map(topic => {
            const { slug } = topic;
            return (
              <h3 key={slug}>
                <Link to={`/articles/topics/${slug}`}>
                  {slug.toUpperCase()}
                </Link>
              </h3>
            );
          })}
      </nav>
    );
  }
}

export default Nav;
