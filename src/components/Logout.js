import React from 'react';
import { useHistory } from 'react-router-dom';


export default function Logout(){
    const history = useHistory();
    
    function logout(){
        localStorage.removeItem('token');
        history.push('/');
    }
   
    return(
        
     <button style={{padding:'1rem', background:'white', border:'0px',
        color:'navy', fontSize:'large', fontWeight:'500', }} 
     onClick={logout}>Logout</button>
    )

}