import React, { Component } from 'react';
import Service from '../../service';

//  components
import TrendingItem from '../trendingItem';

export default class StickerPage extends Component{

    stickerService = new Service();

    render(){
        return(
            <TrendingItem 
                getData={this.stickerService.getTrendingSticker}/>
        )
    }
    
}