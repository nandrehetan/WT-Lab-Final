import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to MSEB</h1>
      <p style={styles.description}>Go to the Bill section to pay your bill</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f0f0f0', // Light gray background color
    height: '800px',
  },
  title: {
    color: '#333',
    fontSize: '32px',
    marginBottom: '20px',
  },
  description: {
    color: '#666',
    fontSize: '18px',
  },
};

export default Home;
