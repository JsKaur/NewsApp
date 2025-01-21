import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp-Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle1" description="my description" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle2" description="my description" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle3" description="my description" />
          </div>
        </div>

        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    );
  }
}

export default News;
