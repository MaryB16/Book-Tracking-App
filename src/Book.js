import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class Book extends Component {

  state ={
    bookshelf:this.props.book.shelf
  }

  changeShelf(event) {

    const book= this.props.book
    const changeToShelf=event.target.value

    BooksAPI.update(book, changeToShelf).then(()=>{
      console.log("book was updated on the server")
      book.shelf = changeToShelf
      this.setState({bookshelf: changeToShelf})
      if(this.props.updateBooksCallback!=null) this.props.updateBooksCallback()
    })
  }

  render (){
    const book= this.props.book

    /*Placeholders in case some details are missing from the books*/
    const bookAuthors = book.authors ? book.authors.join(', ') : 'No authors'
    const bookCover = book.imageLinks ? book.imageLinks.thumbnail || book.imageLinks.smallThumbnail : null
    const bookTitle = book.title? book.title : 'No title'

    return (
      <div className="book">
        <div className="bookshelf-changer">
          <select value={this.props.book.shelf ? this.props.book.shelf : 'none'} onChange={this.changeShelf.bind(this)}>
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
                backgroundImage:`url(${bookCover})`
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
