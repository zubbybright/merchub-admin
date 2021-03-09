import React, { useState, useEffect } from 'react';
import './css/Login.css';
import { login, isAppLoading, isBtnDisabled } from '../redux/actions';
import {adminLogin} from './agents/api';
import { useDispatch, useSelector } from 'react-redux';

export default function Login(){
    const dispatch = useDispatch();
    const [userName,setUsername]= useState('');
    const [password, setPassword] = useState('');
    const auth =useSelector(state => state.auth);
    
    const onChangeUsername = (evt) => {
        setUsername(evt.target.value);
    }
    const onChangePassword = (evt) => {
        setPassword(evt.target.value);
    }

    const loginAdmin = async()=>{
       
        try{
            console.log('logging');
            const {access_token, username,first_name, last_name,role} = await adminLogin(userName,password);
            dispatch(login(access_token,username,first_name, last_name,role));
            localStorage.setItem('token', auth.userToken);
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div >
            <img className="logo" src="./logo.png" alt="logo"></img>
            <div className="form-and-message">
                <div className="message">Welcome Admin</div>
                <div>
                <div className="login-text"> Login Here</div>
                <form className="form">
                    <div>
                        <input className="login-text-input"  type="text" autoComplete="off" 
                        value = {userName} onChange={onChangeUsername} placeholder="Username" name="username" required />
                        <input className="login-text-input" minLength="4" type="password" 
                        value = {password} onChange={onChangePassword} placeholder="Password" name="password" required />
                        <button className="submit-btn" onClick={loginAdmin} type="button" >Login</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}
