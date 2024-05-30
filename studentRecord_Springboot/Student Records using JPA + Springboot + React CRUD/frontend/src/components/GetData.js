import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function GetData() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/api/student/get-data")
      .then((res) => res.json())
      .then((data) => setResult(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.heading}>Student Records</h2>
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr>
            <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {result.map((record) => (
              <tr key={record.id}>
                <td>{record.id} </td>
                <td>{record.name}</td>
                <td>{record.age}</td>
                <td>{record.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid #ddd",
  },
  thead: {
    backgroundColor: "#f2f2f2",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
    fontSize: "18px",
    fontWeight: "bold",
  },
};
