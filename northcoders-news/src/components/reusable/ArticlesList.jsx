import React, { Component } from "react";
import * as api from "../../utils/api.js";
import "../../index.css";
import ArticleCard from "./ArticleCard";
import SortBy from "../queries/SortBy";
import Order from "../queries/Order";
import Limit from "../queries/Limit";
import Page from "../queries/Page";

class ArticlesList extends Component {
  state = {
    articles: null,
    total_count: null,
    queries: {
      sort_by: null,
      order: null,
      author: null,
      topic: null,
      limit: null,
      p: null
    },
    isLoading: true
  };

  updateQueries = (key, value) => {
    this.setState(currState => {
      const newState = { ...currState };
      return { queries: { ...newState.queries, [key]: value } };
    });
  };

  componentDidMount() {
    const { sort_by, order, author, topic, limit, p } = this.state.queries;
    api
      .getArticles(sort_by, order, author, topic, limit, p)
      .then(({ articles, total_count }) => {
        this.setState({ articles, total_count, isLoading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const queries = ["sort_by", "order", "author", "topic", "limit", "p"];
    const stateChanged = queries.some(
      query => prevState.queries[query] !== this.state.queries[query]
    );
    // const propsChanged = queries.some(
    //   query =>
    //     prevProps.queries[query] &&
    //     prevProps.queries[query] !== this.props[query]
    // );
    if (stateChanged) {
      const { sort_by, order, author, topic, limit, p } = this.state.queries;
      api
        .getArticles(sort_by, order, author, topic, limit, p)
        .then(({ articles, total_count }) =>
          this.setState({ articles, total_count, isLoading: false })
        );
    }
    // else if (propsChanged) {
    //   const { sort_by, order, author, topic, limit, p } = this.props;
    //   this.setState(currState => {
    //     // const newState = { ...currState };
    //     return { queries: { sort_by, order, author, topic, limit, p } };
    //   });
    // }
  }

  render() {
    const { articles, isLoading } = this.state;
    return isLoading ? (
      <section className="FlexRow">
        <section className="FlexColumn">
          <SortBy updateQueries={this.updateQueries} />
          <Order updateQueries={this.updateQueries} />
          <Limit updateQueries={this.updateQueries} />
        </section>
        <section className="FlexColumn">
          <p>loading...</p>
        </section>
      </section>
    ) : (
      <section className="FlexRow">
        <section className="FlexColumn">
          <SortBy updateQueries={this.updateQueries} />
          <Order updateQueries={this.updateQueries} />
          <Limit updateQueries={this.updateQueries} />
        </section>
        <section className="FlexColumn">
          <ul>
            {articles &&
              articles.map(article => {
                return <ArticleCard {...article} />;
              })}
          </ul>
          <Page updateQueries={this.updateQueries} />
        </section>
      </section>
    );
  }
}

export default ArticlesList;
