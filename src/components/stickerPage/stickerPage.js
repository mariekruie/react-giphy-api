import React, { Component } from 'react';
import Service from '../../service/service';

//  components
import TrendingItem from '../trendingItem/trendingItem';
import SearchItem from '../searchItem/searchItem';

export default class StickerPage extends Component{

    gifService = new Service();

    render(){

        const {query} = this.props;

        console.log(`Query ${query} recieved to the sticker component`);

        const searchItem = query ? <SearchItem className="search-item" query={query} getData={this.gifService.getSearchSticker}/> : null;

        return(
            <div className='gif-container'>
                <div className="trending-item">
                    <TrendingItem getData={this.gifService.getTrendingSticker}/>
                </div>
                <div className="search-item">
                    { searchItem }
                </div>
            </div>
        )
    }
    
}