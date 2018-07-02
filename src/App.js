import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bookshelf from './Bookshelf';

class App extends Component {

  state ={
    screen: 'mainPage'
  }

  render() {
    return (
      <div className="app">
        {this.state.screen === 'mainPage' && (
          <div className="main-page">
            <div className="book-app-title">
              <h1>Virtual BookShelf</h1>
            </div>
            <div className="all-bookshelves">
              <Bookshelf title ="Currently Reading"/>
              <Bookshelf title="Want to Read"/>
              <Bookshelf title="Read"/>
            </div>
            <div className="open-book-search">
              <a onClick ={()=> this.setState({screen:'searchPage'})}> Add book </a>
            </div>
          </div>
        )}
        {this.state.screen==='searchPage' && (
          <div className="search-page">
            <div className="search-bar">
              <div className="back-to-bookshelves">
                <a onClick ={()=> this.setState({screen:'mainPage'})}></a>
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
      </div>
    );
  }
}

export default App;
