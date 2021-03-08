import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import { Link, useRouteMatch } from "react-router-dom";

const DynamicArticle = (props) => {
  let { url } = useRouteMatch();
  return (
      <article>
        <li>
          <Link to={`/articlelist`}>articlelist</Link>
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
