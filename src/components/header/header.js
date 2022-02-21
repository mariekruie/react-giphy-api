import React from 'react';
import {NavLink} from "react-router-dom";
import "./header.css";



const Header = () => {
    return (
        <div className="header">
            <div className="header__links">

                <NavLink className={({ isActive }) =>(isActive ? "active" : "")} to="/">GIF-ки</NavLink>
                <NavLink className={({ isActive }) =>(isActive ? "active" : "")} to="/stickers">Стикеры</NavLink>
    
            </div>
        </div>
    );
};

export default Header;