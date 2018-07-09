import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
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

 updateBooks () {
  BooksAPI.getAll().then (books => {
     this.setState({books})
     console.log(books)
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
            <Bookshelf updateBooksCallback ={this.updateBooks.bind(this)} books ={this.state.books}/>
            <Link
              className="open-book-search"
            to="/searchPage">
            </Link>
          </div>
        )}/>
        <Route path="/searchPage" component ={SearchPage}/>
      </div>
    )
  }
}

export default App;
