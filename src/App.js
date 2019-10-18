import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AllArticles from "./components/multiple-articles-route/AllArticles";
import ArticlesByTopic from "./components/multiple-articles-route/ArticlesByTopic";
import ArticlesByAuthor from "./components/multiple-articles-route/ArticlesByAuthor";
import SingleArticle from "./components/single-article-route/SingleArticle";
import NotFound from "./components/reusable/errors/NotFound";

class App extends Component {
  state = { loggedInUser: "jessjelly" };

  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Header loggedInUser={loggedInUser} />
        <Nav />
        <Router primary={false}>
          <Home path="/" />
          <AllArticles path="/articles" />
          <ArticlesByTopic path="/articles/topics/:slug" />
          <ArticlesByAuthor
            path="/articles/users/:username"
            loggedInUser={loggedInUser}
          />
          <SingleArticle
            path="/articles/:article_id/*"
            loggedInUser={loggedInUser}
          />
          <NotFound default />
        </Router>
      </div>
    );
  }
}

export default App;
