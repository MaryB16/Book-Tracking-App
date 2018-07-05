import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bookshelf from './Bookshelf';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI'

class App extends Component {

  state = {
    books:[],
    screen: 'mainPage'
  }

  componentDidMount () {
  BooksAPI.getAll().then (books => {
    this.setState({books})
    console.log(books)
  })
}
  render() {
    return (
      <div className="app">
        {this.state.screen === 'mainPage' && (
          <div className="main-page">
            <div className="book-app-title">
              <h1>Virtual BookShelf</h1>
            </div>
            <Bookshelf displayBooks ={this.componentDidMount.bind(this)} books ={this.state.books}/>
            <div className="open-book-search">
              <a onClick ={()=> this.setState({screen:'searchPage'})}> Add book </a>
            </div>
          </div>
        )}
        {this.state.screen==='searchPage' && (
          <SearchPage />
        )}
      </div>
    );
  }
}

export default App;
