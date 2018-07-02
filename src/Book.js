import React, { Component } from 'react';

class Book extends Component {
  render (){
    return (
      <div className="book">
        <div className="bookshelf-changer">
          <select>
            <option value="none" disabled selected>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
        <div className="book-cover"></div>
        <div className="book-name">
          <p>Test Name</p>
        </div>
        <div className="book-author">
          <p>Test author</p>
        </div>
      </div>
    )
  }
}

export default Book;
