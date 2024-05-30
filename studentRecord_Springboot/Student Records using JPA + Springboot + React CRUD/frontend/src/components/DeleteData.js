import React, { useState } from 'react';
import Navbar from './Navbar';

const DeleteData = () => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a DELETE request to the API endpoint
      const response = await fetch(`http://localhost:8082/api/student/delete-data/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setMessage('Record deleted successfully!');
        setId(''); // Clear the input field after deletion
      } else {
        setMessage('Failed to delete record.');
      }
    } catch (error) {
      console.error('Error occurred while deleting data:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.heading}>Delete Student Data</h2>
        <form onSubmit={handleFormSubmit} style={styles.form}>
          <label>
            ID:
            <input type="number" name="id" value={id} onChange={(e) => setId(e.target.value)} style={styles.input} />
          </label>
          <br />
          <button type="submit" style={styles.button}>Delete</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

// Inline styles for the component
const styles = {
  container: {
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '6px',
    border: '1px solid #ced4da',
    width: '100%',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
    fontSize: '18px',
  },
  message: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#28a745',
  },
};

export default DeleteData;
