import React, { Component } from "react";
import * as api from "../utils/api.js";
import Comment from "./Comment";
import Page from "./Page";
import AddComment from "./AddComment";

class CommentsList extends Component {
  state = {
    comments: null,
    isLoading: true
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
    const { article_id, sort_by, order, limit, p } = this.props;
    api
      .getComments(article_id, sort_by, order, limit, p)
      .then(({ comments }) => {
        this.setState({ comments, isLoading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    window.scrollTo(0, 0);
    const queries = ["sort_by", "order", "limit", "p"];
    const propsChanged =
      queries.some(query => prevProps[query] !== this.props[query]) ||
      prevProps.article_id !== this.props.article_id;
    const stateChanged =
      prevState.comments &&
      prevState.comments.length !== this.state.comments.length;
    if (propsChanged || stateChanged) {
      const { article_id, sort_by, order, limit, p } = this.props;
      api
        .getComments(article_id, sort_by, order, limit, p)
        .then(({ comments }) => this.setState({ comments, isLoading: false }));
    }
  }

  render() {
    const { comments, isLoading } = this.state;
    const { article_id, loggedInUser, updateCount } = this.props;
    return isLoading ? (
      <p>loading...</p>
    ) : (
      <section>
        {comments &&
          comments.map(comment => {
            return (
              <Comment
                key={comment.comment_id}
                {...comment}
                loggedInUser={loggedInUser}
                removeComment={this.removeComment}
                updateCount={updateCount}
              />
            );
          })}
        <AddComment
          article_id={article_id}
          loggedInUser={loggedInUser}
          addComment={this.addComment}
          updateCount={updateCount}
        />
        <Page updateQueries={this.updateQueries} />
      </section>
    );
  }
}

export default CommentsList;
