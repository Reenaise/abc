const express = require("express");
const db = require("../config/db");
const router = express.Router();


// READ
router.get("/", (req, res) => {
  const sql = "SELECT * FROM books";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

// READ
router.get("/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM books WHERE id = ${id}`;

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result[0]);
  });
});


// CREATE
router.post("/", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;

  const newTodo = { title, author, completed: false };

  console.log(newTodo.title)
  const sql = "INSERT INTO books (title, author, completed) VALUES (?, ?, ?)";
  db.query(sql, [title, author, false], (err, result) => {
    if (err) {
      throw err;
    }
    newTodo.id = result.insertId;
    res.json(newTodo);
  });
});

// UPDATE
router.put("/:id", (req, res) => {
  const id = req.params.id;

  const title = req.body.title;
  const author = req.body.author;
  const completed = req.body.completed;

  const sql =
    "UPDATE books SET title = ?, author = ?, completed = ? WHERE id = ?";

  db.query(sql, [title, author, completed, id], (err, result) => {
    if (err) {
      throw err;
    }

    const updatedTodo = { id: parseInt(id), title, author, completed };

    res.json(updatedTodo);
  });
});

// DELETE
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM books WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      throw err;
    }

    res.json({ message: "row has deleted" });
  });
});

module.exports = router;