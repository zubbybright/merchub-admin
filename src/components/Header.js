import React from 'react';
import Logout from './Logout';
import './css/Header.css';

export default function Header({firstLink, secondLink, thirdLink}){
    return(
        <div className="header">
        <img className="logo" src="./logo.png" alt="logo"></img>
            <div>{firstLink}</div>
            <div>{secondLink}</div>
            <div>{thirdLink}</div>
        <div className="logout"><Logout /></div>
    </div>
    );
}