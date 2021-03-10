import React from 'react';
import { useHistory } from "react-router-dom";

/**
 * 
 * If you access this route, and you are logged in, redirect to Home
 * The only people that can access this route are those that are not logged in
 * 
 * @param {*} param0 
 */
export default function NotLoggedInRoute({ Component, ...rest }) {
    const history = useHistory();

    var token = localStorage.getItem('token');
    if (token) {
        history.push('/dashboard');
    }

    return (
        <Component {...rest} />
    )

}