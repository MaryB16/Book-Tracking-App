import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

import './App.css';
import Bookshelf from './Bookshelf';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI'

import headerImage from './icons/headerImage.jpg' // relative path to image 

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
            <header>
              <div className="book-app-title">
               <h3>Virtual BookShelf</h3>
               <div className="navigation">
                 <Link className="navigation-buttons"
                 to="/searchPage">Search</Link>
                 <button className="navigation-buttons">dummy btn</button>
                 <button className="navigation-buttons">dummy btn</button>
                 <button className="navigation-buttons">dummy btn</button> 
               </div>
              </div>
            <img className="headerImage" src={headerImage} alt={'logo'}></img>  
            </header>  
            <Bookshelf
              books ={this.state.books}
              updateShelf={this.updateShelf}
            />
            <footer>
              <span>I am a footer and I say nice things</span>
              <div className ="icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fas fa-envelope"></i> 
              </div> 
            </footer>  
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
