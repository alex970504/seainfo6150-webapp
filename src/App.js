import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import { isEmpty } from "lodash";
import ArticleList from "./ArticleList/ArticleList";
import Article from "./Article/Article";

function App() {
  const [fetchedData, setFetchedData] = useState();
  const [convertedData, setConvertedData] = useState([]);

  const convert = (data) => {
    let obj = [];
    if (data) {
      for (let i = 0; i < data.length; i++) {
        obj.push(data[i]);
      }
    }
    return obj;
  };

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch(
          "http://demo1390455.mockable.io/articles"
      );
      const responseJson = await response.json();
      console.log("fetched" + responseJson);
      setFetchedData(responseJson);
      setConvertedData(convert(Object.values(responseJson)));
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);


  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <Switch>
        <Route
          exact
          path={`/articlelist/:slug`}
          render={({ match }) => {
            // getting the parameters from the url and passing
            // down to the component as props
            console.log("this slug", match.params.slug);
            console.log(fetchedData);
            return <DynamicArticle article={fetchedData[match.params.slug]} />;
          }}>
        </Route>
        <Route path={`/articlelist`}>
          <ArticleList articles={convertedData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;