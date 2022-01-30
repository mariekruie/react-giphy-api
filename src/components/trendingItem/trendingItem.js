import React, { Component } from 'react';
import Spinner from '../spinner/spinner';
// styles: 
import './trendingItem.css';

export default class TrendingItem extends Component {

    state = {
        itemList: null,
        idx: 1
    }


    componentDidMount(){
        const {getData} = this.props;   
        getData()
            .then( itemList => {
                this.setState({
                itemList})}
            )
    }
  
    onClickTrending = () =>{
        if( this.state.idx < 24){
          this.setState({
            idx: this.state.idx + 1
          })
        } else {
            this.setState({
            idx: 0
            })
        }
    }

    copyLink = (link) => {
        navigator.clipboard.writeText(link);
        
        let spanCopied = document.getElementById('clipboard-copied');
        spanCopied.style.opacity = '1';
        setTimeout(()=> {spanCopied.style.opacity = '0'}, 1000 )
    }

    renderItems = (arr) => {
        return arr.map( item => {
            const {id, url, title} = item;

            return(
                <>
                    <img className="image" src={url} key={id} alt='x'/>
                    <h2 className="heading">{`Название gif - "${title}"` }</h2>
                    <p className="clipboard" onClick={() => this.copyLink(url)}>Скопировать ссылку
                        <span id="clipboard-copied" className="clipboard-copied">скопировано</span>
                    </p>
                </>
            )
        })
    }

    render(){
        const {itemList, idx} = this.state;

        if(!itemList){
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return(
            <div className="wrapper">
                <h3 className="wrapper__title">Популярное на сегодня</h3>
                {items[idx]}
                <button className="button" type="button" onClick={this.onClickTrending}>Еще вариант</button>
            </div>
        )
    }
}