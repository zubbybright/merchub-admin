import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Logout(){
    const history = useHistory();
    
    function logout(){
        localStorage.removeItem('token');
        history.push('/');
    }
   
    return(
        <div><button onClick={logout}>Logout</button></div>
    )

}