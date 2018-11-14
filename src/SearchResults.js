import React from 'react';
import BookList from './BookList';

const SearchResults = (props) => {
    const {query,searchedBooks, updateShelf} = props
  if(query)
    return (
      <div className="results">
        {(searchedBooks!=null && searchedBooks.length>0) ?(
          <BookList
            books={searchedBooks}
            updateShelf ={updateShelf}
          />
        ) : (
          <div className="search-info">No results match your query</div>
        )}
      </div>
    )

    else return (
      <footer className="search-info">
      <span> Please keep in mind that only certain words can be searched. </span>
        <span> These search terms can be found </span>
        <span className="link"><a href= "https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md"> here</a></span>
      </footer>
      )
}

export default SearchResults
