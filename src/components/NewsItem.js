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
        <div className="card">
  <img src={!imageurl?"https://www.bing.com/images/search?view=detailV2&ccid=WL4%2B9c3J&id=2D2D4F3B9D5B1DC65D216219C86D043295CD6951&thid=OIP.WL4-9c3J37JT6pulTZpZYgHaEK&mediaurl=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4094532.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.58be3ef5cdc9dfb253ea9ba54d9a5962%3Frik%3DUWnNlTIEbcgZYg%26pid%3DImgRaw%26r%3D0&exph=1080&expw=1920&q=news+image+jpg&simid=608004650976629278&FORM=IRPRST&ck=2E10B9CF2B68B7B3F1976D4169F20D43&selectedIndex=5&itb=0&cw=1382&ch=657&ajaxhist=0&ajaxserp=0":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a rel="noreferrer" href={newsUrl} target="_blank"className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
