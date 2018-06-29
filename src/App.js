import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
              <div className="bookshelf">
                <div className="bookshelves-title">
                  <h3>Currently Reading</h3>
                </div>
                <div className="bookshelf-books">
                  <div className="book">
                    <div className="bookshelf-changer">
                      <select>
                        <option value="none" disabled selected>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                    <div className="book-cover"></div>
                    <div className="book-name">
                      <p>Test Name</p>
                    </div>
                    <div className="book-author">
                      <p>Test author</p>
                    </div>
                  </div>
                  <div className="book">
                    <div className="bookshelf-changer"></div>
                    <div className="book-cover"></div>
                    <div className="book-name">
                      <p>Test Name</p>
                    </div>
                    <div className="book-author">
                      <p>Test author</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bookshelf">
                <div className="bookshelves-title">
                  <h3>Want To read</h3>
                </div>
                <div className="bookshelf-books">
                  <div className="book">
                    <div className="bookshelf-changer"></div>
                    <div className="book-cover"></div>
                    <div className="book-name">
                      <p>Test Name</p>
                    </div>
                    <div className="book-author">
                      <p>Test author</p>
                    </div>
                  </div>
                  <div className="book">
                    <div className="bookshelf-changer"></div>
                    <div className="book-cover"></div>
                    <div className="book-name">
                      <p>Test Name</p>
                    </div>
                    <div className="book-author">
                      <p>Test author</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bookshelf">
                <div className="bookshelves-title">
                  <h3>Read</h3>
                </div>
                <div className="bookshelf-books">
                  <div className="book">
                    <div className="bookshelf-changer"></div>
                    <div className="book-cover"></div>
                    <div className="book-name">
                      <p>Test Name</p>
                    </div>
                    <div className="book-author">
                      <p>Test author</p>
                    </div>
                  </div>
                  <div className="book">
                    <div className="bookshelf-changer"></div>
                    <div className="book-cover"></div>
                    <div className="book-name">
                      <p>Test Name</p>
                    </div>
                    <div className="book-author">
                      <p>Test author</p>
                    </div>
                  </div>
                </div>
              </div>
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
