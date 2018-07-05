import React, { Component } from 'react';
import Book from './Book'

class BookList extends Component {
  render () {
    const {bookshelf, books} = this.props
    let filteredBooks = books.filter(book=> book.shelf === bookshelf.filter)
    return (
      <div className ='bookshelf-bookList'>
        {filteredBooks.map((book,index) => (
          <Book
            key ={index}
            book = {book}
            displayBooks ={this.props.displayBooks}
          />
        ))
        }
      </div>
    )
  }
}

export default BookList;
