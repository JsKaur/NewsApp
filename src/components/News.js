import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
    
    constructor(){
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: [],
            loading: false,
            page:1
      
        }
    }

    // it is a lifecycle method which means it will run after the render method.
    // async function can wait in its method for promises to resolve. 
    async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=3ae6ee5ab0944d65840bd11170383265&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      
      let data= await fetch(url);
      let parsedData=await(data.json());
      console.log(data); 
      console.log(parsedData);  
      this.setState({articles: parsedData.articles,
        loading:false,
         totalResults: parsedData.totalResults});
    }

     handlePrevious=  async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=3ae6ee5ab0944d65840bd11170383265&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data= await fetch(url);
      let parsedData=await(data.json());
        
      
      this.setState(
        {page:this.state.page-1,
        loading:false,
        articles: parsedData.articles}
      );
    }

    handleNext=  async()=>{

      
      if(!this.state.page+1>Math.ceil(this.state.totalResults/20)){
       
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=3ae6ee5ab0944d65840bd11170383265&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
        let data= await fetch(url);
      let parsedData=await(data.json());
        
      
      this.setState(
        {page:this.state.page+1,
          loading:false,
        articles: parsedData.articles}
      );
    }}

    render() {
        return (
          <div className="container my-3">
          <h2 className="text-center">NewsApp-Top Headlines</h2>
          {this.state.loading && <Spinner />}
          <div className="row">
          {!this.state.loading && this.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title? element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsUrl={element.url} />
          </div>
          }
          )}
            
          </div>

          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
          </div>
  
          
        </div>
      );
    }
}

export default News