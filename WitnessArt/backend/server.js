const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const cors = require('cors');  // Import the cors package

const app = express();
app.use(cors());  // Use cors middleware
app.use(express.json());

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Replace with your DB username
  password: '24376560',  // Replace with your DB password
  database: 'forensic_sketch'  // Replace with your DB name
});

app.get('/', (req, res) => {
  res.send('Welcome to the Forensic Sketch API');
});

app.get('/api', (req, res) => {
  res.send('API is working! Available endpoints: /api/test, /api/signup, /api/login');
});

// Endpoint to test MySQL connection
app.get('/api/test', (req, res) => {
  db.query('SELECT NOW()', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database connection failed' });
    }
    res.json({ message: 'Database connected successfully', time: results[0] });
  });
});

// Signup Route: Register a new user
app.post('/api/signup', async (req, res) => {
  const { username, first_name, last_name, email, password, dob, mobile_number } = req.body;

  // Check if the email already exists
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
    if (result && result.length > 0) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    db.query(
      'INSERT INTO users (username, first_name, last_name, email, password, dob, mobile_number) VALUES (?, ?, ?, ?, ?, ?, ?)', 
      [username, first_name, last_name, email, hashedPassword, dob, mobile_number],
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Error creating account' });
        }
        return res.status(200).json({ message: 'User registered successfully' });
      }
    );
  });
});

// **Login Route: Authenticate user**
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Fetch user by email
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
    if (err || result.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const user = result[0];

    // Compare the hashed password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    return res.status(200).json({ message: 'Login successful' });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


