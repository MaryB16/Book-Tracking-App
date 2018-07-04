import React, { Component } from 'react';
import BookList from './BookList';

class Bookshelf extends Component {
  state ={
    shelves: [
      {
        name:"Currenty Reading",
        filter:"currentlyReading"
      },
      {
        name:"Want To Read",
        filter:"wantToRead"
      },
      {
        name:"Read",
        filter:"read"
      }
  ]}
  render (){
    return(
      <div className="bookshelves">
        {this.state.shelves.map((shelf,index) => (
          <div className="bookshelf">
            <div className="bookshelves-title">
              <h3>{shelf.name}</h3>
            </div>
            <BookList
              key ={index}
              books ={this.props.books}
              bookshelf = {shelf}
            />
          </div>
        ))}
      </div>
  )}
}

export default Bookshelf;
