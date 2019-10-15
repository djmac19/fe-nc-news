import React, { Component } from "react";
import { Link } from "@reach/router";

class ViewToggler extends Component {
  state = { isShowing: false };

  handleShowHide = event => {
    this.setState(({ isShowing }) => {
      return { isShowing: !isShowing };
    });
  };

  render() {
    const { isShowing } = this.state;
    const { children, article_id } = this.props;
    return (
      <section>
        <section>
          <button onClick={this.handleShowHide}>
            <Link to={`/articles/${article_id}/comments`}>
              {isShowing ? "Hide" : "Show"} Comments
            </Link>
          </button>
        </section>
        {isShowing && <section>{children}</section>}
      </section>
    );
  }
}

export default ViewToggler;
