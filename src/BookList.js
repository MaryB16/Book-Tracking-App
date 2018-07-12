import React from 'react';
import Book from './Book'

const BookList = (props) => {

    const {bookshelf, books, updateShelf} = props
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
            updateShelf={updateShelf}
          />
        ))
        }
      </div>
    )
}

export default BookList;
