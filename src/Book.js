import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class Book extends Component {

  state ={
    bookshelf:this.props.book.shelf
  }

  changeShelf(event) {

    const book=this.props.book
    const changeToShelf=event.target.value

    BooksAPI.update(book, changeToShelf).then(()=>{
      console.log("book was updated on the server")
      this.props.displayBooks()
    })
  }

  render (){

    return (
      <div className="book">
        <div className="bookshelf-changer">
          <select value={this.props.book.shelf} onChange={this.changeShelf.bind(this)}>
            <option value="none" disabled defaultValue>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>

        <div className="book-cover"></div>
        <div className="book-name">
          <p>{this.props.book.title}</p>
        </div>
        <div className="book-author">
          <p>{this.props.book.author}</p>
        </div>
      </div>
    )
  }
}

export default Book;
