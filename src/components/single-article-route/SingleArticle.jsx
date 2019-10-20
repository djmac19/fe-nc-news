import React, { Component } from "react";
import styles from "../../styling/FilteredItems.module.css";
import Article from "./Article";
import ViewToggler from "../reusable/ViewToggler";
import Queries from "../reusable/queries/Queries";
import CommentsList from "./CommentsList";
import Page from "../reusable/queries/Page";

class SingleArticle extends Component {
  state = {
    queries: { sort_by: "created_at", order: "desc", limit: 10, p: 1 },
    count: 0,
    error: true
  };

  updateQueries = (key, value) => {
    this.setState(currState => {
      return { queries: { ...currState.queries, [key]: value } };
    });
  };

  changePage = direction => {
    this.setState(currState => {
      return {
        queries: { ...currState.queries, p: currState.queries.p + direction }
      };
    });
  };

  updateCount = inc_count => {
    this.setState(currState => {
      return { count: parseInt(currState.count + inc_count) };
    });
  };

  updateError = boolean => {
    this.setState({ error: boolean });
  };

  render() {
    const { queries, count, error } = this.state;
    const { article_id, loggedInUser } = this.props;
    return (
      <section>
        <Article
          article_id={article_id}
          loggedInUser={loggedInUser}
          updateCount={this.updateCount}
          updateError={this.updateError}
        />
        {!error && (
          <ViewToggler article_id={article_id}>
            <div className={styles.filtered_items}>
              <div className={styles.sidebar}>
                <Queries
                  updateQueries={this.updateQueries}
                  columns={{ created_at: "Date Created", votes: "Votes" }}
                  count={count}
                />
                <h4 className={styles.total}>Total: {count}</h4>
              </div>
              <div className={styles.items_list}>
                <CommentsList
                  {...queries}
                  article_id={article_id}
                  loggedInUser={loggedInUser}
                  updateCount={this.updateCount}
                  changePage={this.changePage}
                />
                <Page
                  limit={queries.limit}
                  p={queries.p}
                  count={count}
                  changePage={this.changePage}
                />
              </div>
            </div>
          </ViewToggler>
        )}
      </section>
    );
  }
}

export default SingleArticle;
