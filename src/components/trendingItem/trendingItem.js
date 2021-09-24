import React, { Component } from 'react';
import Spinner from '../spinner';
// styles: 
import {Button} from 'reactstrap';
import styled from 'styled-components';
import style from './TrendingItem.module.css';


const CopiedLink = styled.span`
  width: 50%;
  color: rgb(41, 41, 44);
  background-color: #fff;
  font-size: 0.8rem;
  text-align: center;
  padding: 0.2rem 0.1rem;
  border-radius: 5px;
  position: absolute;
  right: 10px;
  top: -30px;
  opacity: ${ state => state.copied ? 1 : 0};
`

export default class TrendingItem extends Component {

    state = {
        itemList: null,
        idx: 1,
        copied: true
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
        console.log('idx change')
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

    renderItems = (arr) => {
        return arr.map( item => {
            const {id, url, title} = item;

            return(
                <>
                    <div className={style.colOne} key={id}>
                        <div className={style.itemContainer}>
                            <img src={url} className={style.image} alt='x'/>
                        </div>
                    </div>
                    <div className={style.colTwo}>
                        <Button outline color="warning" onClick={this.onClickTrending}>Еще вариант</Button>{' '}
                        <h2 className={style.heading}>{`Название gif - "${title}"` }</h2>
                        <p className={style.copyLink} onClick={() => this.copyLink(url)}>Скопировать ссылку
                        <CopiedLink>скопировано</CopiedLink>
                        </p>
                    </div>
                </>
            )
        })
    }

    copyLink = (link) => {
        navigator.clipboard.writeText(link);
        this.setState({copied: !this.state.copied})
    }

    render(){
        const {itemList, idx} = this.state;

        if(!itemList){
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return(
            <div className={style.row}>
                <div className={style.colUp}>
                    <h3 className={style.title}>Популярное на сегодня</h3>
                </div>
                {items[idx]}
            </div>
        )
    }
}