import React from 'react';

const ResultDisplay = ({ result }) => {
  console.log(result);

  return (
    <div className="result-display" style={styles.resultDisplay}>
      <h2 style={styles.heading}>Student Result</h2>
      {result ? (
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr>
              <th style={styles.th}>Subject</th>
              <th style={styles.th}>Mid Sem Marks</th>
              <th style={styles.th}>End Sem Marks</th>
            </tr>
          </thead>
          <tbody>
            {result.subjects.map((subject, index) => (
              <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <td>{subject.name}</td>
                <td>{subject.midSemMarks}</td>
                <td>{subject.endSemMarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No result found for the provided PRN.</p>
      )}
    </div>
  );
};

const styles = {
  resultDisplay: {
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  thead: {
    backgroundColor: '#009688',
    color: '#fff',
  },
  th: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  evenRow: {
    backgroundColor: '#f2f2f2',
  },
  oddRow: {
    backgroundColor: '#fff',
  },
};

export default ResultDisplay;
