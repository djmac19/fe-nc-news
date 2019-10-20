import React, { Component } from "react";
import styles from "../../styling/FilteredItems.module.css";
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
    count: null,
    error: true
  };

  updateQueries = (key, value) => {
    this.setState(currState => {
      return { queries: { ...currState.queries, [key]: value } };
    });
  };

  updateCount = count => {
    this.setState({ count });
  };

  updateError = boolean => {
    this.setState({ error: boolean });
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
    const { queries, count, error } = this.state;
    const { username, loggedInUser } = this.props;
    return (
      <section>
        {!error && (
          <h2 className={styles.title}>
            Articles by {username === loggedInUser ? "me" : username}
          </h2>
        )}
        <div className={styles.filtered_items}>
          {!error && (
            <div className={styles.sidebar}>
              <Queries
                updateQueries={this.updateQueries}
                columns={{
                  created_at: "Date Created",
                  comment_count: "Comments",
                  votes: "Votes"
                }}
                count={count}
              />
              <h4 className={styles.title}>Total: {this.state.count}</h4>
            </div>
          )}
          <div className={styles.items_list}>
            <ArticlesList
              {...queries}
              updateCount={this.updateCount}
              updateError={this.updateError}
            />
            <Page
              limit={queries.limit}
              p={queries.p}
              count={count}
              changePage={this.changePage}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default ArticlesByAuthor;
