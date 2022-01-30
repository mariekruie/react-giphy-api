import React, { Component } from 'react';
import Spinner from '../spinner/spinner';
import icon from "./sad-icon.png";



export default class SearchItem extends Component {

    state={
        itemList: null,
        idx:0
    }

    componentDidMount(){
        const {getData, query} = this.props;   
        getData(query)
            .then( itemList => {
                this.setState({
                itemList});
                console.log(itemList)
            })
    }

    componentDidUpdate(prevProps){
        if (this.props.query !== prevProps.query){
            console.log('Search item has been updated - props')
            const {getData, query} = this.props;  
            getData(query)
            .then( itemList => {
                this.setState({
                itemList});
                console.log(itemList)
            })
        }
    }

    onClickSearch = () => {
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

    renderItems = (arr) =>{
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

    copyLink = (link) => {
        navigator.clipboard.writeText(link);

        let spanCopied = document.getElementById('clipboard-copied');
        spanCopied.style.opacity = '1';
        setTimeout(()=> {spanCopied.style.opacity = '0'}, 1000 )
    }

    render(){
        const {itemList, idx} = this.state;
        const {query} = this.props;

        if (!itemList){
            return <Spinner/>
        } else if(itemList.length === 0){
            return (
            <div className="sad-icon">
              <div className="sad-icon-img" style={{ backgroundImage: `url(${icon})` }}></div>
              <h4>Увы, по этому запросу мы ничего не нашли..</h4>
            </div>
            )
        }

        const items = this.renderItems(itemList);

        return(
            <div className="wrapper">
                <h3 className="wrapper__title reverse">Результаты поиска: {query}</h3>
                {items[idx]}
                <button className="button" type="button" onClick={this.onClickSearch}>Еще вариант</button>
            </div>
            
        )
    }
}