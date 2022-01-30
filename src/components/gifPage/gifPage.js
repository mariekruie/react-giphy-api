import React, { Component } from 'react';
// components
import Service from '../../service/service';
import TrendingItem from '../trendingItem/trendingItem';
import SearchItem from '../searchItem/searchItem';
//styles
import './gifPage.css';


export default class GifPage extends Component{

    gifService = new Service();

    render(){

        const {query} = this.props;

        console.log(`Query ${query} recieved to the Gif component`);

        const searchItem = query ? <SearchItem className="search-item" query={query} getData={this.gifService.getSearchGif}/> : null;

        return(
            <div className='gif-container'>
                <div className="trending-item">
                    <TrendingItem getData={this.gifService.getTrendingGif}/>
                </div>
                <div className="search-item">
                    { searchItem }
                </div>
            </div>
        )
    }
    
}