import React, { Component } from 'react';
import icon from './search-solid.svg';

// styles: 
import './searchForm.css';


export default class SearchForm extends Component{

    state={
        query: null
    }

    handleInput = (e) =>{
        this.setState({
            query: e.target.value,
        })
    }

    render(){

        const {handleQuery} = this.props;
        const {query} = this.state;

        return(
            <>
                <form className="search-form" onSubmit={(e) => {e.preventDefault(); handleQuery(query)}}>
                    <input className="search-input" placeholder="найти gif" onChange={this.handleInput}></input>
                    <button type="submit" className='search-btn'>
                        <img src={icon} alt="a"/>
                    </button>
                </form>


            </>

        )
    }
} 