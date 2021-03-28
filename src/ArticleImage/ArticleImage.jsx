import React from "react";
import styles from './ArticleImage.module.css'

const ArticleImage = props =>{
  return (
      <img src = {props.url} className = {styles.img}/>
  );

};

export default ArticleImage;