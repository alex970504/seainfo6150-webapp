import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import { Link, useRouteMatch } from "react-router-dom";
import styles from './DynamicArticle.module.css'

const DynamicArticle = (props) => {
  let { url } = useRouteMatch();
  return (
      <article className ={styles.box}>
        <li>
          <Link to={`/articlelist`}>Back</Link>
        </li>
        <header>
          <h1>{props.article.title}</h1>
          <address>by {props.article.author} (<a href={props.article.authorEmail}>{props.article.authorEmail}</a>)</address>
          <time>{props.article.displayDate}</time>
        </header>
        <HTMLText text={props.article.text}/>
      </article>
  );
};

export default DynamicArticle;
