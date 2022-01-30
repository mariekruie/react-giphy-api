import React, { Component } from 'react';
import {BrowserRouter as Router,Routes ,Route} from "react-router-dom";
// pages & components
import Header from '../header/header';
import SearchForm from '../searchForm/searchForm';
import GifPage from '../gifPage/gifPage';
import StickerPage from '../stickerPage/stickerPage';
// styles: 
import './App.css';

export default class App extends Component {
  
  state={
    query: null
  }

  handleQuery = (query) => {
    this.setState({
      query
    });
    console.log('query recieved to the app')
  }

  render(){

    const {query} = this.state;

    return (
      <Router>
        <div className="app">

          <Header/>
          <SearchForm handleQuery={this.handleQuery}/>

          <Routes >
              <Route path='/' element={<GifPage query={query}/>} />
              <Route path='/stickers' element={<StickerPage query={query}/>}/>
          </Routes>
          
        </div>
      </Router>
    );
  }
}
