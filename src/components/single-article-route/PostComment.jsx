import React, { Component } from "react";
import * as api from "../../utils/api";
import styles from "../../styling/PostComment.module.css";

class PostComment extends Component {
  state = {
    body: "",
    error: null
  };

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { article_id, loggedInUser, addComment, updateCount } = this.props;
    const { body } = this.state;
    api.postComment(article_id, loggedInUser, body);
    addComment(loggedInUser, body);
    updateCount(1);
    this.setState({ body: "" });
  };

  render() {
    return (
      <div className={styles.post_comment}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="comment">
            <h3 className={styles.title}>Add Your Comment</h3>
          </label>
          <textarea
            className={styles.text_area}
            id="comment"
            type="textarea"
            value={this.state.body}
            onChange={this.handleChange}
            required
          />
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostComment;
