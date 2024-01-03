// Login.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulated authentication logic (replace with your actual authentication code)
    if (email === 'user@example.com' && password === 'password') {
      // Successful login
      history.push('/'); // Redirect to home page
    } else {
      setError('Invalid email or password'); // Set error message for invalid login
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5">Login</h1>
      <form className="mt-3" onSubmit={handleLogin}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      {error && <p className="text-danger mt-3">{error}</p>} {/* Display error message */}
    </div>
  );
};

export default Login;
