import React from 'react';

import { useHistory } from 'react-router-dom';

/** This route is for those who are not yet logged in */

export default function LoggedInRoute({ Component, ...rest }) {
    const history = useHistory();

    var token = localStorage.getItem('token');
    if (!token) {
        history.push('/');
    }

    return(
        <Component {...rest}/>
    )



}