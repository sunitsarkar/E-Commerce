import React from 'react';
 import { useNavigate } from 'react-router';

export default function Login() {
    const navigate=useNavigate()
    const login=()=>{
        navigate('/profile')
    }

    return <div className="form">
        <h3>E-commerce <span className="badge bg-secondary">Website</span></h3>
        <br/>
        <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label>Email address</label>
        </div>
        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label>Password</label>
        </div>
        <br/>
        <button type="button" className="btn btn-dark" onClick={login}>Log in</button>
    </div>
}