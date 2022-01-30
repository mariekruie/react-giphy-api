import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import "./header.css";

const HeaderBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    border: 7px solid;
    margin-bottom: 1rem;
    border-image-slice: 1;
  border-width: 5px;
    border-image-source: var(--gradient-bg);
`;

const HeaderLinks = styled.ul`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    list-style-type: none;
    a {
        padding: 0.5rem;
        font-size: 2.5rem;
        background: var(--gradient-bg);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.6s ease-in;
    }
    a:focus{
        background: white;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight:600;
    }
    a:hover {
        color: rgb(46, 28, 85);
    }
    a{
        text-decoration: none;
        color: white;
    }
`;

const Header = () => {
    return (
        <div>
            <HeaderBlock>
                <HeaderLinks>

                    <Link className="header-link" to="/">GIF-ки</Link>
                    <Link className="header-link" to="/stickers">Стикеры</Link>
     
                </HeaderLinks>
            </HeaderBlock>
        </div>
    );
};

export default Header;