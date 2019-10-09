import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class Nav extends Component {
  state = { topics: null };

  componentDidMount() {
    api.getTopics().then(topics => this.setState(topics));
  }

  render() {
    const { topics } = this.state;
    return (
      <nav>
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
