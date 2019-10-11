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
      p: 1
    },
    count: null
  };

  updateQueries = (key, value) => {
    this.setState(currState => {
      const newState = { ...currState };
      return { queries: { ...newState.queries, [key]: value } };
    });
  };

  updateCount = count => {
    this.setState({ count });
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
    const topicChanged = prevProps.slug !== this.props.slug;
    if (topicChanged) {
      this.setState(currState => {
        const newState = { ...currState };
        return { queries: { ...newState.queries, topic: this.props.slug } };
      });
    }
  }

  render() {
    const { queries } = this.state;
    return (
      <section className="FlexRow">
        <section className="FlexColumn">
          <Queries
            updateQueries={this.updateQueries}
            columns={{
              created_at: "Date Created",
              comment_count: "Comments",
              votes: "Votes"
            }}
          />
          <h4>Total: {this.state.count}</h4>
        </section>
        <section>
          <ArticlesList {...queries} updateCount={this.updateCount} />
          <Page changePage={this.changePage} />
        </section>
      </section>
    );
  }
}

export default ArticlesByTopic;
