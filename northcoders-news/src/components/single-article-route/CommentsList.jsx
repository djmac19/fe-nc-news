import React, { Component } from "react";
import * as api from "../../utils/api";
import Comment from "./Comment";
import AddComment from "./AddComment";
import Error from "../reusable/errors/Error";

class CommentsList extends Component {
  state = {
    comments: null,
    isLoading: true,
    error: null
  };

  addComment = (username, body) => {
    this.setState(currState => {
      const date = new Date();
      return {
        comments: [
          ...currState.comments,
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
        this.setState({ comments, isLoading: false, error: null });
      })
      .catch(error =>
        this.setState({
          error: {
            msg: error.response.data.msg,
            status: error.response.status
          }
        })
      );
  }

  componentDidUpdate(prevProps, prevState) {
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
        .then(({ comments }) =>
          this.setState({ comments, isLoading: false, error: null })
        )
        .catch(error =>
          this.setState({
            error: {
              msg: error.response.data.msg,
              status: error.response.status
            }
          })
        );
    }
  }

  render() {
    const { comments, isLoading, error } = this.state;
    const { article_id, loggedInUser, updateCount } = this.props;
    return error ? (
      <Error {...error} />
    ) : isLoading ? (
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
      </section>
    );
  }
}

export default CommentsList;
