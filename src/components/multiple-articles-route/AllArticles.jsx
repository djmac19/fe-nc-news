import React, { Component } from "react";
import styles from "../../styling/FilteredItems.module.css";
import Queries from "../reusable/queries/Queries";
import ArticlesList from "../reusable/ArticlesList";
import Page from "../reusable/queries/Page";

class AllArticles extends Component {
  state = {
    queries: {
      sort_by: "created_at",
      order: "desc",
      author: null,
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

  changePage = direction => {
    this.setState(currState => {
      return {
        queries: { ...currState.queries, p: currState.queries.p + direction }
      };
    });
  };

  render() {
    const { queries, count } = this.state;
    return (
      <section className={styles.filtered_items}>
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
        <div className={styles.items_list}>
          <ArticlesList {...queries} updateCount={this.updateCount} />
          <Page
            limit={queries.limit}
            p={queries.p}
            count={count}
            changePage={this.changePage}
          />
        </div>
      </section>
    );
  }
}

export default AllArticles;
