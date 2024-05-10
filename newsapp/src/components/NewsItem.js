import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description,urlToImage,url,author,date,name} = this.props;
    return (
      <div>
        <div className="card"> 
        <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{left:'85%', zIndex:'1', top:'5%'}}>{name}</span>       
          <img src={urlToImage} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={url} target='_blank' className="btn btn-dark">Go somewhere</a>
            <p className="card-text"><small class="text-body-secondary">Published by {author} on {date}</small></p>
          </div>
        </div>
      </div>
    )
  }
}
