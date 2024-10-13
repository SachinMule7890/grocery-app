import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Define valid credentials
    const validUsername = 'admin';
    const validPassword = 'password123';

    // Check if the entered credentials match valid credentials
    if (username === validUsername && password === validPassword) {
      navigate('/dashboard'); // Navigate to the dashboard
    } else {
      setError('Invalid credentials'); // Show error message
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Login Page</h2>
        <form onSubmit={handleLogin}>
          <div>
            <input 
              type="text" 
              placeholder="Email/Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit">Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        </form>
        <Link to="/signup">Don't have an account? Sign Up</Link>
      </header>
    </div>
  );
}

export default Login;
