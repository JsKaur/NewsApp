// rce and enter

import React, { Component } from 'react'

export class NewsItem extends Component {
  // constructor(){
  //   super();
  //   console.log("I am from constructor");
  // }
  // this gets printed on console for 6 times because it is constructor of NewsItem and we have 6 news items in News.js.


  render() {
    let {title, description, imageurl, newsUrl}=this.props;
    return (
        
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="_blank"className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
