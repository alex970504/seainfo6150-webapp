import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";
import { fireEvent } from "@testing-library/react";
import ArticleImage from "../ArticleImage/ArticleImage";

describe("ArticleListItem tests", () => {
  test("Click", () => {
    const onclick = () => {console.log("clicked")};
    const {container} = render(<ArticleTextToggleButton onclick={onclick}/>);
    expect(container).toMatchSnapshot();
  });
});