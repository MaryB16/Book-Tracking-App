import React, { Component } from 'react';
import Book from './Book'

class BookList extends Component {
  render () {
    const {bookshelf, books} = this.props
    let filteredBooks
    if(bookshelf)
       filteredBooks = books.filter(book=> book.shelf === bookshelf.filter)
      else
      filteredBooks = books
    return (
      <div className ='bookshelf-bookList'>

        {filteredBooks.map((book,index) => (
          <Book
            key ={index}
            book = {book}
            updateBooksCallback ={this.props.updateBooksCallback}
          />
        ))
        }
      </div>
    )
  }
}

export default BookList;
