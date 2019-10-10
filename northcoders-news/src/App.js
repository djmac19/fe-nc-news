import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AllArticles from "./components/AllArticles";
import ArticlesByTopic from "./components/ArticlesByTopic";
import ArticlesByAuthor from "./components/ArticlesByAuthor";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Home path="/" />
        <AllArticles path="/articles" />
        <ArticlesByTopic path="/articles/topics/:slug" />
        <ArticlesByAuthor path="/articles/users/:username" />
        <SingleArticle path="/articles/:article_id/*" />
      </Router>
    </div>
  );
}

export default App;
