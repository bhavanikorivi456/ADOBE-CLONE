import React, { useState } from "react";
import "../styles/Header.css";
import AdobeLogo from '../assets/adobe-logo.png';

const Header = () =>{

    return (
        <header>
        <div className="logo-and-categories">
            <img src={AdobeLogo} alt="Adobe Logo" className="adobe-logo" />
            
            <nav className="categories">
                <ul>
                <li><a href="#">Creativity & Desing</a></li>
                <li><a href="#">PDF & E-signatures</a></li>
                <li><a href="#">Marketing & Commerce</a></li>
                <li><a href="#">Help & Support</a></li>
                </ul>
            </nav>
        </div>

            <button className="signin-button">Sing In</button>
        </header>
        
        
    )
}

export default Header;