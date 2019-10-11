import React, { Component } from "react";
import * as api from "../utils/api.js";
import Queries from "./queries/Queries";
import Comment from "./Comment";
import Page from "./Page";
import AddComment from "./AddComment";

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

  addComment = (username, body) => {
    this.setState(currState => {
      const newState = { ...currState };
      const date = new Date();
      return {
        comments: [
          ...newState.comments,
          {
            comment_id: 0,
            author: username,
            body,
            votes: 0,
            created_at: date.toString().slice(0, 24)
          }
        ]
      };
    });
  };

  removeComment = comment_id => {
    this.setState(currState => {
      const newComments = [...currState.comments].filter(
        comment => comment.comment_id !== comment_id
      );

      return { comments: newComments };
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
    window.scrollTo(0, 0);
    const queries = ["sort_by", "order", "limit", "p"];
    const stateChanged =
      queries.some(
        query => prevState.queries[query] !== this.state.queries[query]
      ) ||
      (prevState.comments &&
        prevState.comments.length !== this.state.comments.length);
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
    const { article_id, loggedInUser } = this.props;
    return isLoading ? (
      <p>loading...</p>
    ) : (
      <section className="FlexRow">
        <Queries updateQueries={this.updateQueries} />
        <section>
          {comments &&
            comments.map(comment => {
              return (
                <Comment
                  key={comment.comment_id}
                  {...comment}
                  loggedInUser={loggedInUser}
                  removeComment={this.removeComment}
                />
              );
            })}
          <AddComment
            article_id={article_id}
            loggedInUser={loggedInUser}
            addComment={this.addComment}
          />
          <Page updateQueries={this.updateQueries} />
        </section>
      </section>
    );
  }
}

export default CommentsList;
