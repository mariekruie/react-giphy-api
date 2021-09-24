import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    border: 7px solid white;
    margin-bottom: 1rem;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        padding: 0.5rem;
        font-size: 2.5rem;
    }
    li:active{
        background-color: white;
        color: rgb(46, 28, 85);
    }
    li:hover a{
        color: rgb(46, 28, 85);
    }
    li a{
        text-decoration: none;
        color: white;
    }
`;

const Header = () => {
    return (
        <div>
            <HeaderBlock>
                <HeaderLinks>
                    <li>
                        <a href="#">GIF-ки</a>
                    </li>
                    <li>
                        <a href="#">Стикеры</a>
                    </li>
                </HeaderLinks>
            </HeaderBlock>
        </div>
    );
};

export default Header;