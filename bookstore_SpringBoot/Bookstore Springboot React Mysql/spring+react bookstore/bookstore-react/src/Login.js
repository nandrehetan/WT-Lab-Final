// Login.js

import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        // Handle non-successful responses
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      // If login is successful, set the username cookie
      Cookies.set('username', username);
      setMessage('Login successful!');
      navigate('/');
    } catch (error) {
      console.error('Error during login:', error.message);
      setMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
    
      <div style={styles.container}>
        <h1 style={styles.heading}>Login Page</h1>
        <form style={styles.form}>
          <label style={styles.label}>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input} />
          </label>
          <br />
          <label style={styles.label}>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
          </label>
          <br />
          <button type="button" onClick={handleLogin} style={styles.button}>
            Login
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

export default Login;

// CSS styles directly within the same file
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  message: {
    textAlign: 'center',
    marginTop: '20px',
  },
};
