import React, { Component } from "react";
import "../index.css";
import Queries from "./queries/Queries";
import ArticlesList from "./reusable/ArticlesList";
import Page from "./Page";

class AllArticles extends Component {
  state = {
    queries: {
      sort_by: null,
      order: null,
      author: null,
      topic: null,
      limit: null,
      p: null
    }
  };

  updateQueries = (key, value) => {
    this.setState(currState => {
      const newState = { ...currState };
      return { queries: { ...newState.queries, [key]: value } };
    });
  };

  render() {
    return (
      <section className="FlexRow">
        <Queries updateQueries={this.updateQueries} />
        <section>
          <ArticlesList {...this.state.queries} />
          <Page updateQueries={this.updateQueries} />
        </section>
      </section>
    );
  }
}

export default AllArticles;
