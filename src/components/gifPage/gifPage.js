import React, { Component } from 'react';
import Service from '../../service';

// components
import TrendingItem from '../trendingItem';
import SearchItem from '../searchItem';

export default class GifPage extends Component{

    gifService = new Service();

    render(){

        // const {query} = this.props;

        // const serachItem = query ? <SearchItem query={query} getData={this.gifService.getSearchGif}/> : null;

        // console.log(`I am a ${query} query in gifPage compoenent`)

        return(
            <>
                {/* {serachItem} */}
                <TrendingItem 
                    getData={this.gifService.getTrendingGif}/>
            </>
        )
    }
    
}