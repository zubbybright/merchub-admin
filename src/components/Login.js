import React, { useState, useEffect } from 'react';
import './css/Login.css';

export default function Login(){

    return (
        <div >
            <img className="logo" src="./logo.png" alt="logo"></img>
            <div className="form-and-message">
                <div className="message">Welcome Admin</div>
                <div>
                <div className="login-text"> Login Here</div>
                <form className="form">
                    <div>
                        <input className="login-text-input"  type="text" autoComplete="off" placeholder="Username" name="username" required />
                        <input className="login-text-input" minLength="4" type="password" placeholder="Password" name="password" required />
                        <button className="submit-btn" type="submit" >Login</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}
