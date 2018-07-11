import React from 'react';
import Book from './Book'

const BookList = (props) => {

    const {bookshelf, books} = props
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
            updateBooksCallback ={props.updateBooksCallback}
          />
        ))
        }
      </div>
    )
}

export default BookList;
