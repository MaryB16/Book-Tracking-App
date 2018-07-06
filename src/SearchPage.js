import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class SearchPage extends Component {

  state = {
    query:''
  }

  updateQuery =(query) => {
    this.setState({ query:query.trim() })
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
      <div className="results">
        <h3>Results will show up here </h3>
      </div>
    </div>

  )}
}

export default SearchPage
