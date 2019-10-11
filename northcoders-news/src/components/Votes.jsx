import React, { Component } from "react";
import * as api from "../utils/api";

class Votes extends Component {
  state = {
    voteChange: 0
  };

  handleClick = inc_votes => {
    const { item, id } = this.props;
    const { voteChange } = this.state;
    this.setState({
      voteChange: voteChange + inc_votes
    });
    api.patchVotes(item, id, inc_votes);
  };

  render() {
    const { votes, author, loggedInUser } = this.props;
    const { voteChange } = this.state;
    return (
      <section>
        <p>Votes: {votes + voteChange}</p>
        {author !== loggedInUser && (
          <section>
            <button
              onClick={() => this.handleClick(1)}
              disabled={voteChange > 0}
            >
              Vote Up
            </button>
            <button
              onClick={() => this.handleClick(-1)}
              disabled={voteChange < 0}
            >
              Vote Down
            </button>
          </section>
        )}
      </section>
    );
  }
}

export default Votes;
