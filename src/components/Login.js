import React, { useState, useEffect } from 'react';
import './css/Login.css';
import { login, isAppLoading, isBtnDisabled} from '../redux/actions';
import {adminLogin} from './agents/api';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Login(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [userName,setUsername]= useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const auth =useSelector(state => state.auth);
    const common = useSelector(state => state.common);

    
    const onChangeUsername = (evt) => {
        setUsername(evt.target.value);
    }
    const onChangePassword = (evt) => {
        setPassword(evt.target.value);
    }

    const loginAdmin = async()=>{
        dispatch(isBtnDisabled(true));
        dispatch(isAppLoading(true));
        try{
            console.log('logging');
            const {access_token, username,first_name, last_name,role} = await adminLogin(userName,password);
            dispatch(login(access_token,username,first_name, last_name,role));
            localStorage.setItem('token', auth.userToken);
            history.push('/dashboard');
        }
        catch(error){
            if(error.response.data.message)
                setError(true);
        }
        dispatch(isAppLoading(false));
    }

    useEffect(() => {
        (userName.length === 0 || password.length === 0) ?dispatch(isBtnDisabled(true)): dispatch(isBtnDisabled(false))
    },[userName, password]);
    return (
        <div >
            <img className="logo" src="./logo.png" alt="logo"></img>
            <div className="form-and-message">
                <div className="message">Welcome Admin</div>
                <div>
                <div className="login-text"> Login Here</div>
                <form className="form">
                    <div>
                        { error &&
                            <div className="error-message">Invalid Username or Password</div>
                        }
                        <input className="login-text-input"  type="text" autoComplete="off" 
                        value = {userName} onChange={onChangeUsername} placeholder="Username" 
                        name="username" required />
                        <input className="login-text-input" minLength="4" type="password" 
                        value = {password} onChange={onChangePassword} placeholder="Password" 
                        name="password" required />
                        <button disabled={common.isBtnDisabled} className={common.isBtnDisabled?"submit-btn-disabled":"submit-btn"} 
                        onClick={loginAdmin} type="button" >{common.isLoading ?'Logging in':'Login'}</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}
