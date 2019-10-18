import React, { Component } from "react";
import "../../index.css";
import Queries from "../reusable/queries/Queries";
import ArticlesList from "../reusable/ArticlesList";
import Page from "../reusable/queries/Page";

class ArticlesByAuthor extends Component {
  state = {
    queries: {
      sort_by: "created_at",
      order: "desc",
      author: this.props.username,
      topic: null,
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
    const authorChanged = prevProps.username !== this.props.username;
    if (authorChanged) {
      this.setState(currState => {
        return {
          queries: { ...currState.queries, author: this.props.username }
        };
      });
    }
  }

  render() {
    const { queries, count } = this.state;
    const { username, loggedInUser } = this.props;
    return (
      <section>
        <h2>Articles by {username === loggedInUser ? "me" : username}</h2>
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

export default ArticlesByAuthor;
