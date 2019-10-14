import React, { Component } from "react";
import * as api from "../../utils/api";
import Error from "./errors/Error";

class Votes extends Component {
  state = {
    voteChange: 0,
    error: null
  };

  handleClick = inc_votes => {
    const { item, id } = this.props;
    this.setState(currState => ({
      voteChange: currState.voteChange + inc_votes,
      error: null
    }));
    api.patchVotes(item, id, inc_votes).catch(error => {
      this.setState(currState => ({
        voteChange: currState.voteChange - inc_votes,
        error: {
          msg: error.response.data.msg,
          status: error.response.status
        }
      }));
    });
  };

  render() {
    const { votes, author, loggedInUser } = this.props;
    const { voteChange, error } = this.state;
    return error ? (
      <Error {...error} />
    ) : (
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
