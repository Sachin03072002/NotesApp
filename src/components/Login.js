import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [credentials, setCredetials] = useState({ email: "", password: "" });
    let history = useNavigate();
    const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",

            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //save the auth token and redirect
            localStorage.setItem('token', json.auth_token);
            props.showAlert("Logged In Successfully", "success");
            history('/');

        } else {
            props.showAlert("Invalid Details", "danger");
        }
    }
    const onChange = (e) => {
        setCredetials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" value={credentials.email} onChange={onChange} name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" value={credentials.password} onChange={onChange} name="password" />
                </div>

                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}
