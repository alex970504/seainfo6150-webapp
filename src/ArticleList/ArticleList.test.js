import React from "react";
import ArticleList from "./ArticleList";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem tests", () => {
  it("renders correctly", () => {
    const article = {
      "slug": "slug-123",
      "title": "title",
      "shortText": "short text",
      "text": "<p>paragraph 1</p><p>paragraph 2</p>",
      "pubDate": "Wed, 14 Nov 2018 12:20:29 GMT",
      "pubYear": "2018",
      "author": "Jeanine Cantrell",
      "authorEmail": "jeanine.cantrell@nytimes.com",
      "image": {
        "_url": "https://cdn.cnn.com/cnnnext/dam/assets/180419105150-ski-roof-hotel-8-super-169.jpg",
        "_height": "619",
        "_width": "1100"
      },
      "timeStamp": "2018-11-14T12:20:29.000Z",
      "displayDate": "November 14th 2018, 4:20 am"
    };
    const articleSec = {
      "slug": "slug-124",
      "title": "title",
      "shortText": "short text",
      "text": "<p>paragraph 1</p><p>paragraph 2</p>",
      "pubDate": "Wed, 14 Nov 2018 12:20:29 GMT",
      "pubYear": "2018",
      "author": "Jeanine Cantrell",
      "authorEmail": "jeanine.cantrell@nytimes.com",
      "image": {
        "_url": "https://cdn.cnn.com/cnnnext/dam/assets/180419105150-ski-roof-hotel-8-super-169.jpg",
        "_height": "619",
        "_width": "1100"
      },
      "timeStamp": "2018-11-14T12:20:29.000Z",
      "displayDate": "November 14th 2018, 4:20 am"
    };

    const list = [article, articleSec];
    const { container } = render(<ArticleList articles={list} />);
    expect(container).toMatchSnapshot();
  });
});