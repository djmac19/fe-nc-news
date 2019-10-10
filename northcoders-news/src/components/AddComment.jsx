import React, { Component } from "react";
import * as api from "../utils/api";

class AddComment extends Component {
  state = {
    body: ""
  };

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { article_id, loggedInUser } = this.props;
    const { body } = this.state;
    api.postComment(article_id, loggedInUser, body).then(data => {
      console.log(data);
      this.setState({ body: "" });
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="comment">
          <h3>Add a comment...</h3>
        </label>
        <input
          id="comment"
          type="text"
          value={this.state.body}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddComment;
