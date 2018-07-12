import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import placeholder from "./icons/placeholder.jpg"

class Book extends Component {

  render (){
    console.log(this.props.updateShelf)
    const book= this.props.book

    /*Placeholders in case some details are missing from the books*/
    const bookAuthors = book.authors ? book.authors.join(', ') : 'No authors'
    const bookCover = book.imageLinks ? book.imageLinks.thumbnail || book.imageLinks.smallThumbnail : placeholder
    const bookTitle = book.title? book.title : 'No title'

    return (
      <div className="book">
        <div className="bookshelf-changer">
          <select value={this.props.book.shelf ? this.props.book.shelf : 'none'} onChange={(event) => {this.props.updateShelf(book, event.target.value)}}>
            <option value="moveTo" disabled defaultValue>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
        <div className="book-details">
          <div className="book-cover"
            style={
              {
                backgroundImage:`url('${bookCover}')`
              }}>
          </div>
          <div className="book-name">
            {bookTitle}
          </div>
          <div className="book-authors">
            {bookAuthors}
          </div>
        </div>
      </div>
    )
  }
}

export default Book;
