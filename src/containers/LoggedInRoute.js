import React from 'react';

import { useHistory , Route } from 'react-router-dom';

/** This route is for those who are not yet logged in */

export default function LoggedInRoute({ component: Component, path, ...rest }) {
    const history = useHistory();

    var token = localStorage.getItem('token');
    if (!token) {
        history.push('/');
    }

    return(
        <Route path={path}>
            <Component {...rest}/>
        </Route> 
    )



}