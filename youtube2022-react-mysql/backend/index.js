import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    process.exit(1); // Exit the process if unable to connect to MySQL
  }
  console.log("Connected to MySQL database");
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/books", (req, res) => {
  const query = "SELECT * FROM books";
  db.query(query, (err, data) => {
    if (err) {
      console.error("Error fetching books:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const query = "INSERT INTO books (title, desc1, price, cover) VALUES (?, ?, ?, ?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(query, values, (err, data) => {
    if (err) {
      console.error("Error inserting book:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(201).json({ message: "Book added successfully", data });
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const query = "DELETE FROM books WHERE id = ?";

  db.query(query, [bookId], (err, data) => {
    if (err) {
      console.error("Error deleting book:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json({ message: "Book deleted successfully", data });
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const query = "UPDATE books SET title = ?, `dec1` = ?, price = ?, cover = ? WHERE id = ?";
  const values = [
    req.body.title,
    req.body.dec1,
    req.body.price,
    req.body.cover,
    bookId,
  ];

  db.query(query, values, (err, data) => {
    if (err) {
      console.error("Error updating book:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json({ message: "Book updated successfully", data });
  });
});

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
