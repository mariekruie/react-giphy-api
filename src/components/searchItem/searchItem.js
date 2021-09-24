// import React, { Component } from 'react';
// import Spinner from '../spinner';
// // styles: 
// import {Button} from 'reactstrap';
// import styled from 'styled-components';
// import style from './SearchItem.module.css';

// const CopiedLink = styled.span`
//   width: 50%;
//   color: rgb(41, 41, 44);
//   background-color: #fff;
//   font-size: 0.8rem;
//   text-align: center;
//   padding: 0.2rem 0.1rem;
//   border-radius: 5px;
//   position: absolute;
//   right: 10px;
//   top: -30px;
//   opacity: ${ state => state.copied ? 1 : 0};
// `

// export default class SearchItem extends Component {

//     state={
//         itemList: null,
//         idx:0
//     }

//     componentDidMount(){
//         const {getData, query} = this.props;   
//         getData(query)
//             .then( itemList => {
//                 console.log(itemList);
//                 this.setState({
//                 itemList})}
//             )
//     }

//     renderItems = (arr) =>{
//         return arr.map( item => {
//             const {id, url, title} = item;

//             return(
//                 <>
//                     <div className={style.colOne} key={id}>
//                         <div className={style.itemContainer}>
//                             <img src={url} className={style.image} alt='x'/>
//                         </div>
//                     </div>
//                     <div className={style.colTwo}>
//                         <Button outline color="warning" onClick={() => this.onClickSearch}>Еще вариант</Button>{' '}
//                         <h2 className={style.heading}>{`Название gif - "${title}"` }</h2>
//                         <p className={style.copyLink} onClick={() => this.copyLink(url)}>Скопировать ссылку
//                         <CopiedLink>скопировано</CopiedLink>
//                         </p>
//                     </div>
//                 </>
//             )
//         })
//     }

//     onClickSearch = () => {
//         if( this.state.idx < 24){
//           this.setState({
//             idx: this.state.idx + 1
//           })
//        } else {
//           this.setState({
//             idx: 0
//           })
//          }
//     }

//     copyLink = (link) => {
//         navigator.clipboard.writeText(link);
//     }

//     render(){
//         const {itemList, idx} = this.state;

//         if (!itemList){
//             return <Spinner/>
//         }

//         const items = this.renderItems(itemList);

//         return(
//             <div className={style.row}>
//                 <div className={style.colUp}>
//                     <h3 className={style.title}>Результаты поиска</h3>
//                 </div>
//                 {items[idx]}
//             </div>
//         )
//     }
// }