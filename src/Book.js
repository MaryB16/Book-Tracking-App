import React from 'react';
import placeholder from "./icons/placeholder.jpg"

const Book = (props) => {
  const book= props.book

  /*Placeholders in case some details are missing from the books*/
  const bookAuthors = book.authors ? book.authors.join(', ') : 'No authors'
  const bookCover = book.imageLinks ? book.imageLinks.thumbnail || book.imageLinks.smallThumbnail : placeholder
  const bookTitle = book.title? book.title : 'No title'

  return (
    <div className="book">
      <div className="bookshelf-changer">
        <select value={props.book.shelf ? props.book.shelf : 'none'} onChange={(event) => {props.updateShelf(book, event.target.value)}}>
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

export default Book;
