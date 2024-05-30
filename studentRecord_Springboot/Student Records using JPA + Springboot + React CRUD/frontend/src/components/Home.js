import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.home}>
        <h1>Welcome to CRUD APP</h1>
        <p>Hello From CRUD</p>
      </div>
    </div>
  );
};

const styles = {
  home: {
    textAlign: 'center',
    padding: '50px',
  }
};

export default Home;
