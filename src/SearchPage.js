import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchResults from './SearchResults'


class SearchPage extends Component {

  state = {
    query:'',
    searchedBooks:[]
  }

  searchBooks = (searchQuery) => {
    BooksAPI.search(searchQuery).then ((searchedBooks)=> {

/*Checking to see if the search returned any books. If it did add shelf to the books that are on the main page shelves as well*/
      if( searchedBooks && searchedBooks.length) {
          searchedBooks.map (searchedBook => {
            this.props.books.forEach(book =>{
              if(book.id=== searchedBook.id) {
                searchedBook.shelf = book.shelf
              }
            })
              this.setState({searchedBooks:searchedBooks})
          })
      }
        else  this.setState({searchedBooks:[]})


    })

  }

  updateQuery =(query) => {
    this.setState({query:query})
    this.searchBooks(query)
  }



render () {
  return (
    <div className="search-page">
      <div className="search-bar">
        <div className="back-to-bookshelves">
          <Link
            className="icon"
          to="/">
          </Link>
        </div>
        <div className="user-input">
          <input
            type="text"
            placeholder="Search books"
            value ={this.state.query}
            onChange ={(event) => this.updateQuery(event.target.value) }
          />
        </div>
      </div>
      <SearchResults
        query= {this.state.query}
        searchedBooks ={this.state.searchedBooks}
        updateShelf ={this.props.updateShelf}
        books = {this.props.books}
      />
    </div>
  )}
}

export default SearchPage
