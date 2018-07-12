import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

import './App.css';
import Bookshelf from './Bookshelf';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI'

class App extends Component {

  state = {
    books:[]
  }

  componentDidMount () {
  this.updateBooks()
 }

 updateBooks =() =>{
  BooksAPI.getAll().then (books => {
     this.setState({books})
   })
 }

 updateShelf = (selectedBook, updatedShelf) => {
     selectedBook.shelf = updatedShelf
     BooksAPI.update(selectedBook, updatedShelf).then(() => {
       this.setState({
         books: this.state.books.filter(book => book.id !== selectedBook.id).concat([selectedBook])
       })
     })
   }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render = {()=>(
          <div className="main-page">
            <div className="book-app-title">
              <h1>Virtual BookShelf</h1>
            </div>
            <Bookshelf
              books ={this.state.books}
              updateShelf={this.updateShelf}
            />
            <Link
              className="open-book-search"
            to="/searchPage">
            </Link>
          </div>
        )}/>
        <Route path="/searchPage" render ={() => (
          <SearchPage
            updateShelf = {this.updateShelf}
            books ={this.state.books}
          />
        )}
        />
      </div>
    )
  }
}

export default App;
