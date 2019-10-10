import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AllArticles from "./components/AllArticles";
import ArticlesByTopic from "./components/ArticlesByTopic";
import ArticlesByAuthor from "./components/ArticlesByAuthor";
import SingleArticle from "./components/SingleArticle";

class App extends Component {
  state = { loggedInUser: "jessjelly" };

  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Header loggedInUser={loggedInUser} />
        <Nav />
        <Router>
          <Home path="/" />
          <AllArticles path="/articles" />
          <ArticlesByTopic path="/articles/topics/:slug" />
          <ArticlesByAuthor path="/articles/users/:username" />
          <SingleArticle
            path="/articles/:article_id/*"
            loggedInUser={loggedInUser}
          />
        </Router>
      </div>
    );
  }
}

export default App;
