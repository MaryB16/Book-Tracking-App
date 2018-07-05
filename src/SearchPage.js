import React, { Component } from 'react';

class SearchPage extends Component {

render () {

  return (
    <div className="search-page">
      <div className="search-bar">
        <div className="back-to-bookshelves">
          <a></a>
        </div>
        <div className="user-input">
          <input
            type="text"
            placeholder="Search books"
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
