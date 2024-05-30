import React, { useState } from 'react';

const StudentForm = () => {
  const [prn, setPrn] = useState('');
  const [subjects, setSubjects] = useState([
    { name: '', midSemMarks: '', endSemMarks: '' },
    { name: '', midSemMarks: '', endSemMarks: '' },
    { name: '', midSemMarks: '', endSemMarks: '' },
  ]);
  const [additionalSubject, setAdditionalSubject] = useState({ name: '', midSemMarks: '', endSemMarks: '' });

  const handleInputChange = (index, event) => {
    const newSubjects = [...subjects];
    newSubjects[index][event.target.name] = event.target.value;
    setSubjects(newSubjects);
  };

  const handleAdditionalSubjectChange = (event) => {
    setAdditionalSubject({ ...additionalSubject, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch('http://localhost:8082/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prn,
          subjects: [...subjects, additionalSubject],
        }),
      }).then(res => res.json()).then(result => console.log(result));
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <div style={styles.prnContainer}>
        <label style={styles.prnLabel}>PRN:</label>
        <input
          type="text"
          value={prn}
          onChange={(e) => setPrn(e.target.value)}
          style={styles.prnInput}
        />
      </div>

      <div style={styles.cardContainer}>
        {subjects.map((subject, index) => (
          <div key={index} style={styles.card}>
            <label style={styles.label}>Subject Name:</label>
            <input
              type="text"
              name="name"
              value={subject.name}
              onChange={(e) => handleInputChange(index, e)}
              style={styles.input}
            />
            <label style={styles.label}>Mid Sem Marks:</label>
            <input
              type="number"
              name="midSemMarks"
              value={subject.midSemMarks}
              onChange={(e) => handleInputChange(index, e)}
              style={styles.input}
            />
            <label style={styles.label}>End Sem Marks:</label>
            <input
              type="number"
              name="endSemMarks"
              value={subject.endSemMarks}
              onChange={(e) => handleInputChange(index, e)}
              style={styles.input}
            />
          </div>
        ))}
      </div>

      <div style={styles.card}>
        <label style={styles.label}>Subject Name:</label>
        <input
          type="text"
          name="name"
          value={additionalSubject.name}
          onChange={handleAdditionalSubjectChange}
          style={styles.input}
        />
        <br></br>
        <label style={styles.label}>Mid Sem Marks:</label>
        <input
          type="number"
          name="midSemMarks"
          value={additionalSubject.midSemMarks}
          onChange={handleAdditionalSubjectChange}
          style={styles.input}
        />
         <br></br>
        <label style={styles.label}>End Sem Marks:</label>
        <input
          type="number"
          name="endSemMarks"
          value={additionalSubject.endSemMarks}
          onChange={handleAdditionalSubjectChange}
          style={styles.input}
        />
      </div>

      <button type="submit" style={styles.submitButton}>Submit</button>
    </form>
  );
};

export default StudentForm;

/* CSS */
const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    maxWidth: '800px',
    margin: 'auto',
    marginTop:'25px',
  },
  prnContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  prnLabel: {
    color: 'orange',
    marginRight: '10px',
  },
  prnInput: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  card: {
    flex: '1',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  label: {
    color: '#009688',
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    width: '90%',
  },
  submitButton: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  },
};
