import React, { Component } from 'react';
import BookList from './BookList';

class Bookshelf extends Component {
  render (){
    return(
      <div className="bookshelf">
        <div className="bookshelves-title">
          <h3>{this.props.title}</h3>
        </div>
        <BookList/>
      </div>
    )
  }
}

export default Bookshelf;
