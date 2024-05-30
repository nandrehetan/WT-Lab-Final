import React, { useState } from 'react';
import Navbar from './Navbar';
const UpdateData = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    id:'',
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
      await fetch('http://localhost:8082/api/student/update-data', {
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
      <h2 style={styles.heading}>Update Student Data</h2>
      <form onSubmit={handleFormSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>ID:</label>
          <input type="number" name="id" value={formData.id} onChange={handleInputChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Age:</label>
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    margin: '0 auto',
    marginTop: '20px'
  },
  heading: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    color: '#555',
    marginBottom: '5px',
  },
  input: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ced4da',
    width: '100%',
    fontSize: '16px',
  },
  button: {
    padding: '15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
    fontSize: '18px',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default UpdateData;
