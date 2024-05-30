import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div style={styles.title}>
        <h1>Student Records using Spring Boot</h1>
      </div>
      <div style={styles.flexContainer}>
        <div style={styles.navItem}>
          <Link to="/home" style={styles.link}>Home</Link>
        </div>
        <div style={styles.navItem}>
          <Link to="/save-data" style={styles.link}>Save Data</Link>
        </div>
        <div style={styles.navItem}>
          <Link to="/get-data" style={styles.link}>Get Data</Link>
        </div>
        <div style={styles.navItem}>
          <Link to="/update-data" style={styles.link}>Update Data</Link>
        </div>
        <div style={styles.navItem}>
          <Link to="/delete-data" style={styles.link}>Delete Data</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  title: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    padding: '10px 0',
  },
  navItem: {
    margin: '0 10px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  linkHover: {
    backgroundColor: '#e9ecef',
  }
};

export default Navbar;
