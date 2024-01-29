import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <div className='row'>
          <div className='col-md-3'>
            <NewsItem title="title" description="description"/>
          </div>
          <div className='col-md-3'>
            <NewsItem title="title" description="description"/>
          </div>
          <div className='col-md-3'>
            <NewsItem title="title" description="description"/>
          </div>
          <div className='col-md-3'>
            <NewsItem title="title" description="description"/>
          </div>
        </div>
      </div>
    )
  }
}
