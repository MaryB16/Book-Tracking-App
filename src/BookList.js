import React, { Component } from 'react';
import Book from './Book'

class BookList extends Component {
  render () {
    console.log("this is the shelf:" + this.props.bookshelf.filter)
    const {bookshelf, books} = this.props
    let filteredBooks = books.filter(book=> book.shelf === bookshelf.filter)
    console.log("this is the" + filteredBooks)
    return (
      <div className ='bookshelf-bookList'>
        {filteredBooks.map((book,index) => (
          <Book
            key ={index}
            bookInformation = {book}
          />
        ))
          }
      </div>
    )
  }
}

export default BookList;
