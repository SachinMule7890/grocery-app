import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Signup Page</h2>
        <form>
          <div>
            <input type="text" placeholder="Username" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <Link to="/login">Already have an account? Login</Link>
      </header>
    </div>
  );
}

export default Signup;
