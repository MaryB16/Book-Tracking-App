import React, { Component } from 'react';
import BookList from './BookList';

class SearchResults extends Component {
  render () {
    const {query,searchedBooks} = this.props

    console.log("this is the typed query: " + query)

      if(query)
    return (
      <div className="results">
        {(searchedBooks!=null && searchedBooks.length>0) ?(
          <BookList
            books={searchedBooks}
          />
        ) : (
          <div className="search-info">No results match your query</div>
        )}
      </div>
    )

    else return (
      <div className="search-info">
        <p> Please keep in mind that only certain words can be searched. </p>
        <p> These search terms can be found </p>
        <p><a href= "https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md"> here</a></p>
      </div>
      )
  }
}

export default SearchResults
