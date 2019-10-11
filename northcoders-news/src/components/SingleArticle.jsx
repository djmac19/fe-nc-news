import React, { Component } from "react";
import Article from "./Article";
import ViewToggler from "./reusable/ViewToggler";
import Queries from "./queries/Queries";
import CommentsList from "./CommentsList";

class SingleArticle extends Component {
  state = {
    queries: { sort_by: null, order: null, limit: null, p: null },
    count: 0
  };

  updateQueries = (key, value) => {
    this.setState(currState => {
      const newState = { ...currState };
      return { queries: { ...newState.queries, [key]: value } };
    });
  };

  changePage = value => {
    this.setState(currState => {
      const newState = { ...currState };
      return {
        queries: { ...newState.queries, p: newState.queries.p + value }
      };
    });
  };

  updateCount = inc_count => {
    this.setState(currState => {
      return { count: parseInt(currState.count + inc_count) };
    });
  };

  render() {
    const { queries, count } = this.state;
    const { article_id, loggedInUser } = this.props;
    return (
      <section>
        <Article
          article_id={article_id}
          loggedInUser={loggedInUser}
          updateCount={this.updateCount}
        />
        <ViewToggler>
          <section className="FlexRow">
            <section className="FlexColumn">
              <Queries
                updateQueries={this.updateQueries}
                columns={{ created_at: "Date Created", votes: "Votes" }}
              />
              <h4>Total: {count}</h4>
            </section>
            <CommentsList
              {...queries}
              article_id={article_id}
              loggedInUser={loggedInUser}
              updateCount={this.updateCount}
            />
          </section>
        </ViewToggler>
      </section>
    );
  }
}

export default SingleArticle;
