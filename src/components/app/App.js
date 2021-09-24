import React, { Component } from 'react';
// pages & components
import Header from '../header/header';
import SearchForm from '../searchForm';
import GifPage from '../gifPage';
import StickerPage from '../stickerPage';
// styles: 
import './App.css';


export default class App extends Component {
  
  state={
    query: null
  }

  handleQuery = (query) => {
    this.setState({
      query
    }, () => {console.log(this.props); console.log(this.state.query)})
    console.log("query submitted to App")
  }

  render(){

    const {query} = this.state;

    return (
      <div className="mainWrapper"> 
        <Header/>
        <SearchForm handleQuery={this.handleQuery}/>
        <div className="gifContainer">
            <GifPage query={query}/>
            <StickerPage query={query}/>
        </div>
      </div>
    );
  }
}
