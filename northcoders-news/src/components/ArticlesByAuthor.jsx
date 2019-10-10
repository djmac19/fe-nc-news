import React, { Component } from "react";
import "../index.css";
import Queries from "./queries/Queries";
import ArticlesList from "./reusable/ArticlesList";
import Page from "./Page";

class ArticlesByAuthor extends Component {
  state = {
    queries: {
      sort_by: null,
      order: null,
      author: this.props.username,
      topic: null,
      limit: null,
      p: 1
    }
  };

  updateQueries = (key, value) => {
    this.setState(currState => {
      const newState = { ...currState };
      return { queries: { ...newState.queries, [key]: value } };
    });
  };

  changePage = value => {
    console.log("in changePage");
    this.setState(currState => {
      const newState = { ...currState };
      return {
        queries: { ...newState.queries, p: newState.queries.p + value }
      };
    });
  };

  componentDidUpdate(prevProps) {
    const authorChanged = prevProps.username !== this.props.username;
    if (authorChanged) {
      this.setState(currState => {
        const newState = { ...currState };
        return {
          queries: { ...newState.queries, author: this.props.username }
        };
      });
    }
  }

  render() {
    return (
      <section className="FlexRow">
        <Queries updateQueries={this.updateQueries} />
        <section>
          <ArticlesList {...this.state.queries} />
          <Page changePage={this.changePage} />
        </section>
      </section>
    );
  }
}

export default ArticlesByAuthor;
