import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from "./ArticleListItem";


const ArticleList = props => {
  let displayContent;

  console.log(props.articles);
  if (props.articles.length) {
    displayContent = (
        <ul>
          {props.articles.map((item) => (
              <ArticleListItem key={item.slug} article={item}/>
          ))}
        </ul>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }
  return displayContent;
};

export default ArticleList;