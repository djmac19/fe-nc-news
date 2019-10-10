import React, { Component } from "react";
import * as api from "../utils/api.js";
import Queries from "./queries/Queries";
import Comment from "./Comment";
import Page from "./Page";

class CommentsList extends Component {
  state = {
    comments: null,
    isLoading: true,
    queries: { sort_by: null, order: null, limit: null, p: null }
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

  componentDidMount() {
    const { article_id } = this.props;
    const { sort_by, order, limit, p } = this.state.queries;
    api
      .getComments(article_id, sort_by, order, limit, p)
      .then(({ comments }) => {
        this.setState({ comments, isLoading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const queries = ["sort_by", "order", "limit", "p"];
    const stateChanged = queries.some(
      query => prevState.queries[query] !== this.state.queries[query]
    );
    const propsChanged = prevProps.article_id !== this.props.article_id;
    if (propsChanged || stateChanged) {
      const { article_id } = this.props;
      const { sort_by, order, limit, p } = this.state.queries;
      api
        .getComments(article_id, sort_by, order, limit, p)
        .then(({ comments }) => this.setState({ comments, isLoading: false }));
    }
  }

  render() {
    const { comments, isLoading } = this.state;
    return isLoading ? (
      <p>loading...</p>
    ) : (
      <section className="FlexRow">
        <Queries updateQueries={this.updateQueries} />
        <section>
          {comments &&
            comments.map(comment => {
              return <Comment {...comment} />;
            })}
          <Page updateQueries={this.updateQueries} />
        </section>
      </section>
    );
  }
}

export default CommentsList;