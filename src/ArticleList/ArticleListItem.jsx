import React, {useState} from "react";
import {Link, useRouteMatch} from "react-router-dom";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from './ArticleListItem.module.css';
import "./ArticleListItem.css"
import ArticleImage from "../ArticleImage/ArticleImage"


const ArticleListItem = props => {
  const [hidden, setHidden] = useState(true);
  let {url} = useRouteMatch();
  return (
      <div className={styles.box + " cell-width"}>
        <ArticleImage url = {props.article.image._url} title = {props.article.title} />
        <li key={props.article.slug}>
          <div className = {styles.div}>
            <Link className = {styles.title} to={`/articlelist/${props.article.slug}`}>{props.article.title}</Link>
            {!hidden && <div>
              <p className ={styles.p}>{props.article.shortText}</p>
              <p>
                <time className= {styles.time} dateTime={props.article.pubYear}> {props.article.pubDate} </time>
              </p>
            </div>}
          </div>
          <br/>
          <ArticleTextToggleButton buttonText={hidden ? "Show more" : "Show less"}
                                   onClick={() => setHidden(!hidden)}/>
        </li>
      </div>
  );

};


export default ArticleListItem;