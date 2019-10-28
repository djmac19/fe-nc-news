import React, { Component } from "react";

class ViewToggler extends Component {
  state = { isShowing: false };

  handleShowHide = event => {
    this.setState(({ isShowing }) => {
      return { isShowing: !isShowing };
    });
  };

  render() {
    const { isShowing } = this.state;
    const { children } = this.props;
    return (
      <section>
        <section>
          <button onClick={this.handleShowHide}>
            {isShowing ? "Hide" : "Show"} Comments
          </button>
        </section>
        {isShowing && <section>{children}</section>}
      </section>
    );
  }
}

export default ViewToggler;
