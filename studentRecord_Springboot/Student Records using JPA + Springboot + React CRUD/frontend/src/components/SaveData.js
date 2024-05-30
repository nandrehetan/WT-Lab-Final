import React, { useState } from 'react';
import Navbar from './Navbar';
const SaveData = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    age: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the API endpoint
      await fetch('http://localhost:8082/api/student/save-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then(res => res.json()).then(result => console.log(result));
    } catch (error) {
      console.error('Error occurred while saving data:', error);
    }
  };

  return (
    <div>
    <Navbar />
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Student</h2>
      <form onSubmit={handleFormSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label> <br></br>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>City:</label><br></br>
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Age:</label><br></br>
          <input type="text" name="age" value={formData.age} onChange={handleInputChange} style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Save</button>
      </form>
    </div>
    </div>
  );
};

// Inline styles for the component
const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    marginTop: '50px'
  },
  heading: {
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    color: '#555',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default SaveData;
