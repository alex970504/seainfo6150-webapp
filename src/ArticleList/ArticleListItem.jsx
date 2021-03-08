import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const ArticleListItem = props =>{
  let { url } = useRouteMatch();
  return (
        <li key={props.article.slug}>
          <strong>{props.article.title}</strong>
          <p>{props.article.shortText}</p>
          <p> <time dateTime={props.article.pubYear}> {props.article.pubDate} </time>
            <Link to={`/articlelist/${props.article.slug}`}>detail</Link></p>
        </li>
  );

};



export default ArticleListItem;