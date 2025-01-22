import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles= [
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
      },
      {
        "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
      }
    ]


  constructor(){

    // we use state when we want to change the value of a variable and want to reflect that change in the UI without refreshing the page.
    // props are immutable, we cannot change the value of props. they are read only.
  
    super();
    console.log("I am constructor from news component");
    this.state={
      articles:this.articles,
      loading:false
    }
  }


  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp-Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle1" description="my description" imageurl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" newsUrl="" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle2" description="my description" imageurl="" newsUrl="" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle3" description="my description" imageurl="" newsUrl=""/>
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
