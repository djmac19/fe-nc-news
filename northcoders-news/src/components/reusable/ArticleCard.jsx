import React from "react";
import { Link } from "@reach/router";
import styles from "../../styling/ArticleCard.module.css";

function ArticleCard({
  article_id,
  title,
  author,
  topic,
  votes,
  created_at,
  comment_count
}) {
  const date = new Date(created_at);
  const images = {
    coding:
      "http://downloads.bbc.co.uk/schoolradio/assemblies/images/computer_code.jpg",
    football: "https://ichef.bbci.co.uk/images/ic/1920x1080/p05h62gc.jpg",
    cooking: "https://ichef.bbci.co.uk/images/ic/1920x1080/p031y9w7.jpg"
  };
  return (
    <section className={styles.article_card}>
      <img className={styles.image} src={images[topic]} alt={`${topic}`} />
      <h3 className={styles.title}>
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </h3>
      <p className={styles.author}>
        by <Link to={`/articles/users/${author}`}>{author}</Link>
      </p>
      <p className={styles.created_at}>
        Date Created: <br /> {date.toString().slice(0, 24)}
      </p>
      <p className={styles.votes}>Votes: {votes}</p>
      <p className={styles.comments}>Comments: {comment_count}</p>
    </section>
  );
}

export default ArticleCard;
