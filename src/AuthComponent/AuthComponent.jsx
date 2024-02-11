import React from 'react';
import { useState } from 'react';
import './authstyle.css';
import closeIcon from '../assets/CloseIcon.svg'

const AuthComponent = ({ onSuccess, handleAuthDisplay }) => {
    const handleLogin = async () => {
        const email = document.getElementById('email').value; // Replace 'email' with the actual ID of your email input
        const password = document.getElementById('password').value; // Replace 'password' with the actual ID of your password input

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            console.log(response);
            if (response.ok) {
                // Login successful
                const data = await response.json();
                // Do something with the data, if needed

                // Perform any additional actions after successful authentication
                onSuccess();
            } else {
                // Login failed
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const handleSignUp = async () => {
        const name = document.getElementById('fullName').value;
        const phone = document.getElementById('phoneNumber').value;
        const email = document.getElementById('signUpEmail').value;
        const password = document.getElementById('signUpPassword').value;

        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, phone, email, password }),
            });
            console.log(response)
            if (response.ok) {
                // Sign-up successful
                const data = await response.json();
                // Do something with the data, if needed

                // Perform any additional actions after successful sign-up
                onSuccess();
            } else {
                // Sign-up failed
                console.error('Sign-up failed');
            }
        } catch (error) {
            console.error('Error during sign-up:', error);
        }
    };
    return (

        <div className='auth-backdrop'>
            <div className="section pb-5 pt-5 pt-sm-2 text-center form-container">
                <img src={closeIcon} onClick={handleAuthDisplay} className='close-auth' />
                <h6 className="mb-0 pb-3">
                    <span style={{ color: 'white' }} >Log In </span>
                    <span style={{ color: 'white' }} >Sign Up</span>
                </h6>
                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                        <div className="card-front">
                            <div className="center-wrap">
                                <div className="section text-center">
                                    <h4 className="mb-4 pb-3" style={{ color: 'white' }}>Log In</h4>
                                    <div className="form-group">
                                        <input type="email" id='email' className="form-style" placeholder="Email" />
                                        <i className="input-icon uil uil-at"></i>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="password" id='password' className="form-style" placeholder="Password" />
                                        <i className="input-icon uil uil-lock-alt"></i>
                                    </div>
                                    <a className="btn mt-4" onClick={handleLogin}>
                                        Login
                                    </a>
                                    <p className="mb-0 mt-4 text-center">
                                        <a href="https://www.web-leb.com/code" className="link">
                                            Forgot your password?
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-back">
                            <div className="center-wrap">
                                <div className="section text-center">
                                    <h4 className="mb-3 pb-3" style={{ color: 'white' }}>Sign Up</h4>
                                    <div className="form-group">
                                        <input type="text" id='fullName' className="form-style" placeholder="Full Name" />
                                        <i className="input-icon uil uil-user"></i>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="tel" className="form-style" placeholder="Phone Number" id='phoneNumber' />
                                        <i className="input-icon uil uil-phone"></i>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="email" className="form-style" placeholder="Email" id='signUpEmail' />
                                        <i className="input-icon uil uil-at"></i>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="password" className="form-style" placeholder="Password" id='signUpPassword' />
                                        <i className="input-icon uil uil-lock-alt"></i>
                                    </div>
                                    <a className="btn mt-4" onClick={handleSignUp}>
                                        Register
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthComponent;
