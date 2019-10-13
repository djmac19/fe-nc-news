import React, { Component } from "react";
import "../index.css";
import Queries from "./queries/Queries";
import ArticlesList from "./reusable/ArticlesList";
import Page from "./Page";

class ArticlesByTopic extends Component {
  state = {
    queries: {
      sort_by: "created_at",
      order: "desc",
      author: null,
      topic: this.props.slug,
      limit: 10,
      p: 1
    },
    count: null
  };

  updateQueries = (key, value) => {
    this.setState(currState => {
      return { queries: { ...currState.queries, [key]: value } };
    });
  };

  updateCount = count => {
    this.setState({ count });
  };

  changePage = direction => {
    this.setState(currState => {
      return {
        queries: { ...currState.queries, p: currState.queries.p + direction }
      };
    });
  };

  componentDidUpdate(prevProps) {
    const topicChanged = prevProps.slug !== this.props.slug;
    if (topicChanged) {
      this.setState(currState => {
        return { queries: { ...currState.queries, topic: this.props.slug } };
      });
    }
  }

  render() {
    const { queries, count } = this.state;
    const { slug } = this.props;
    return (
      <section>
        <h2>Articles about {`${slug.toUpperCase()}`}</h2>
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
            <Page
              limit={queries.limit}
              p={queries.p}
              count={count}
              changePage={this.changePage}
            />
          </section>
        </section>
      </section>
    );
  }
}

export default ArticlesByTopic;
