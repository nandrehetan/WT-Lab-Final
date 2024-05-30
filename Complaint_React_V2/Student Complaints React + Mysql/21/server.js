const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'complaints_db',
});

db.connect();

// POST route to register a complaint
app.post('/complaints', (req, res) => {
  const { title, description } = req.body;

  const sql = 'INSERT INTO complaints (title, description) VALUES (?, ?)';
  db.query(sql, [title, description], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('Complaint registered successfully');
    }
  });
});

// POST route for login
app.post('/login', (req, res) => {
  const { username, password, role } = req.body;

  // Query to check if the username and password match in the database
  const sql = 'SELECT * FROM login WHERE username = ? AND password = ? AND role = ?';

  db.query(sql, [username, password, role], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    }
  });
});

// GET route to fetch all complaints
app.get('/complaints', (req, res) => {
  const sql = 'SELECT * FROM complaints';

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
