
import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <h1>Welcome to Login Page</h1>
      
      <label htmlFor="email">Enter your email:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="password">Enter your password:</label>
      <input type="password" id="password" name="password" />
      
      <button type="submit">Login</button>
    </div>
  );
};

export default Login;
