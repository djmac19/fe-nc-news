import React, { Component } from "react";
import Article from "./Article";
import ViewToggler from "./reusable/ViewToggler";
import Queries from "./queries/Queries";
import CommentsList from "./CommentsList";
import Page from "./Page";

class SingleArticle extends Component {
  state = {
    queries: { sort_by: "created_at", order: "desc", limit: 10, p: 1 },
    count: 0
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
            <section className="FlexColumn">
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
            </section>
          </section>
        </ViewToggler>
      </section>
    );
  }
}

export default SingleArticle;
