const express = require("express");
const db = require("../config/db");
const router = express.Router();
const bcrypt = require('bcrypt');


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
// router.get("/:id", (req, res) => {
//   const id = req.params.id;

//   const sql = `SELECT * FROM books WHERE id = ${id}`;

//   db.query(sql, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.json(result[0]);
//   });
// });


// CREATE
// router.post("/", (req, res) => {
//   const title = req.body.title;
//   const author = req.body.author;

//   const newTodo = { title, author, completed: false };

//   console.log(newTodo.title)
//   const sql = "INSERT INTO books (title, author, completed) VALUES (?, ?, ?)";
//   db.query(sql, [title, author, false], (err, result) => {
//     if (err) {
//       throw err;
//     }
//     newTodo.id = result.insertId;
//     res.json(newTodo);
//   });
// });


// CREATE
// router.post("/", (req, res) => {
//   const title = req.body.title;
//   const author = req.body.author;

//   const newTodo = { title, author, completed: false };

//   console.log(newTodo.title)
//   const sql = "INSERT INTO books (title, author, completed) VALUES (?, ?, ?)";
//   db.query(sql, [title, author, false], (err, result) => {
//     if (err) {
//       throw err;
//     }
//     newTodo.id = result.insertId;
//     res.json(newTodo);
//   });
// });


//CREATE
router.post("/payments", (req, res) => {
  const mobile = req.body.mobile;
  // const author = req.body.author;

  const newTodo = { mobile };

  console.log(newTodo.title)
  const sql = "INSERT INTO payments (mobile) VALUES (?)";
  db.query(sql, [mobile], (err, result) => {
    if (err) {
      throw err;
    }
    newTodo.id = result.insertId;
    res.json(newTodo);
  });
});

//CREATE
// Registration route (assuming you already have a User model)
// router.post('/user', async (req, res) => {
//   const { username, email, password, dob } = req.body;

//   // Basic validation
//   if (!username || !email || !password || !dob ) {
//     return res.status(400).json({   
//  msg: 'Please enter all fields'   
//  });
//   }

//   try {
//     // Check if the user already exists (using prepared statement)
//     const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
//     if (existingUser.length > 0) {
//       return res.status(400).json({   
//  msg: 'User already exists' });
//     }

//     // Hash the password using bcrypt (replace with actual hashing logic)
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     // Save the user to the database
//     await newUser.save();

//     res.json({   
//  msg: 'User registered successfully' });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

router.post('/user', async (req, res) => {
  try {
    const { name, email, password, dob } = req.body;

    // Validate the required fields
    if (!name || !email || !password || !dob) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { name, email, password: hashedPassword, dob };

    const sql = "INSERT INTO user (name, email, password, dob) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, hashedPassword, dob], (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Database error", details: err });
      }

      newUser.id = result.insertId; // Store the newly created user ID
      res.status(201).json(newUser);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check if both fields are provided
  if (!email || !password) {
    return res.status(400).json({ error: "Both email and password are required" });
  }

  // Query the database to find a user with the given email
  const sql = "SELECT * FROM user WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error", details: err });
    }

    // If no user is found
    if (results.length === 0) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const user = results[0];

    // Compare the provided password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // If the email and password match, return a success message or token (if using JWT for example)
    res.json({ success: true, message: "Login successful", user: { id: user.id, name: user.name, email: user.email } });
  });
});

//CREATE
router.post("/completePayment", (req, res) => {
  const bill = req.body.bill;
  const pNumber = req.body.pNumber;
  const mPayment = req.body.mPayment;
  const amount = req.body.amount;

  const newTodo = { bill, pNumber, mPayment, amount };

  console.log(newTodo.title)
  const sql = "INSERT INTO completepayment (bill, pNumber, mPayment, amount) VALUES (?, ?, ?, ?)";
  db.query(sql, [bill, pNumber, mPayment, amount], (err, result) => {
    if (err) {
      throw err;
    }
    newTodo.id = result.insertId;
    res.json(newTodo);
  });
});


// GET route to fetch data from the payment table
router.get('/getpayment', (req, res) => {
  const sql = "SELECT * FROM completepayment";
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: 'An error occurred while fetching data' });
    }
    res.json(results);
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