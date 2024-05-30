import React, { useState } from 'react';
import ResultDisplay from './ResultDisplay';
import { useNavigate } from 'react-router-dom';

const ResultForm = () => {
  const [prn, setPrn] = useState('');
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch(`http://localhost:8082/api/students/${prn}`)
        .then((res) => res.json())
        .then((result) => setResult(result));
    } catch (error) {
      console.error('Error fetching result:', error);
      setResult(null);
    }
  };

  return (
    <div className="result-form" style={styles.resultForm}>
      <form onSubmit={handleSubmit}>
        <label className="prn-label" style={styles.prnLabel}>
          Enter PRN: 
          <br></br>
          <input type="text" value={prn} onChange={(e) => setPrn(e.target.value)} style={styles.input} />
        </label>
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>

      {result && <ResultDisplay result={result} />}
    </div>
  );
};

const styles = {
  resultForm: {
    textAlign: 'center',
    padding: '20px',
  },
  prnLabel: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: '18px',
    marginRight: '10px',
  },
  input: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  submitButton: {
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default ResultForm;
