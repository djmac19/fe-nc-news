import React, { Component } from "react";
import "../index.css";
import Queries from "./queries/Queries";
import ArticlesList from "./reusable/ArticlesList";
import Page from "./Page";

class ArticlesByTopic extends Component {
  state = {
    queries: {
      sort_by: null,
      order: null,
      author: null,
      topic: this.props.slug,
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

  componentDidUpdate(prevProps) {
    const topicChanged = prevProps.slug !== this.props.slug;
    if (topicChanged) {
      this.setState(currState => {
        const newState = { ...currState };
        return { queries: { ...newState.queries, topic: this.props.slug } };
      });
    }
  }

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

export default ArticlesByTopic;
