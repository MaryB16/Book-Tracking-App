import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookList from './BookList';
import SearchResults from './SearchResults'


class SearchPage extends Component {

  state = {
    query:'',
    searchedBooks:[],
    noResults:false
  }

  searchBooks = (searchQuery) => {
    BooksAPI.search(searchQuery).then ((books)=> {
      this.setState({searchedBooks:books})
      console.error(books)
    })
  }

  updateQuery =(query) => {
    this.setState({ query:query.trim() })
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
        noResults ={this.state.noResults}
      />
    </div>

  )}
}

export default SearchPage
