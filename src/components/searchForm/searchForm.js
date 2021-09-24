import React, { Component } from 'react';
import icon from './search-solid.svg';

// styles: 
import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
    display: flex;
`;

const Input = styled.input`
    padding: 1rem;
    width: 95%;
`;

const SearchButton = styled.button`
    width: 5%;
    background-color: rgb(153, 43, 226);
    border: 1px solid rgb(153, 43, 226);
    cursor: pointer;
`;


export default class SearchForm extends Component{

    state={
        query: null
    }

    handleInput = (e) =>{
        this.setState({
            query: e.target.value,
        }, () => {console.log(this.state.query)})
        console.log('handling innput');
    }

    render(){

        const {handleQuery} = this.props;
        const {query} = this.state;

        return(
            <Form >
                <Input placeholder="найти gif" onChange={this.handleInput}></Input>
                <SearchButton onClick={() => handleQuery(query)}>
                    <img src={icon} alt="a"/>
                </SearchButton>
            </Form>
        )
    }
} 