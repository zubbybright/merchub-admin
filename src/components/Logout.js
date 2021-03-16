import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Logout(){
    const history = useHistory();
    
    function logout(){
        localStorage.removeItem('token');
        history.push('/');
    }
   
    return(  
     <Button variant="outline-success"
     onClick={logout}>Logout</Button>
    )

}