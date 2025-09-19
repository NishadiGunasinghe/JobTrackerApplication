// Executes business logic (SQL)
const db = require('../models/db');

exports.getAllUsers = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).send('Database error');
    res.json(results);
  });
};

// You can add createUser, updateUser, deleteUser here later
