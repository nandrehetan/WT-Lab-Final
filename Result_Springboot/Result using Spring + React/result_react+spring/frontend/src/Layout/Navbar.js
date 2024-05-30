import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div style={styles.navbar}>
      <div className="title-container">
        <h1 style={styles.title}>Result Management System</h1>
      </div>
      <div style={styles.navLinks}>
        <Link to="/home" style={styles.navLink}>Home</Link>
        <Link to="/enter-marks" style={styles.navLink}>Enter Marks</Link>
        <Link to="/view-marks" style={styles.navLink}>View Marks</Link>
      </div>
    </div>
  );
}

/* CSS */
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
  },
  title: {
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '20px',
    fontWeight: 'bold',
  },
};
