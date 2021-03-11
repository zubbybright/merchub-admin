import React from 'react';
import Header from './Header';
import './css/Dashboard.css';


export default function Dashboard(){
    return ( 
        <div className="wrapper">
            <Header firstLink={<a href="/dashboard">Dashboard</a>}
            secondLink={<a href="#">Products Management</a>}
            thirdLink={<a href="#">Profile</a>}
            />
        </div>

    )
}