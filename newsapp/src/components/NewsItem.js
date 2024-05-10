import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description,urlToImage,url} = this.props;
    return (
      <div>
        <div className="card">
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={url} target='_blank' className="btn btn-dark">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}
