import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
  constructor(){
  super();
  this.state={
    articles:[],
    loading:false,
    page:1
  }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aa88b390c00e4981b26aae14bd4c4516&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url); 
    let parsedata=await data.json();
    this.setState({articles:parsedata.articles,
      loading:false,
      totalResults:parsedata.totalResults});
  }
  previous = async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aa88b390c00e4981b26aae14bd4c4516&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url); 
    let parsedata=await data.json();
    this.setState({
      page:this.state.page-1,
      loading:false,
      articles:parsedata.articles});
  }
  next = async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aa88b390c00e4981b26aae14bd4c4516&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url); 
    let parsedata=await data.json();
    this.setState({
      page:this.state.page+1,
      loading:false,
      articles:parsedata.articles});
  }
  render(props) {
    return (
      <div className='container my-3 mx-auto'>
      <h1 className='text-center'>Get Recent News</h1>
      {this.state.loading && <Spinner/>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-4 mb-4' key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,71):""} description={element.description?element.description.slice(0,95):""}  
            urlToImage={element.urlToImage?element.urlToImage:"https://ichef.bbci.co.uk/news/1024/branded_news/4193/production/_132778761_gettyimages-1658892930.jpg"} 
            url={element.url} author={element.author?element.author:"Unknown"} date={new Date(element.publishedAt).toDateString()} name={element.source.name.slice(0,16)}/>
          </div>
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previous}>&laquo; Previous</button>
          <button disabled={this.state.page>=this.state.totalResults/this.props.pageSize} type="button" className="btn btn-dark" onClick={this.next}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}
