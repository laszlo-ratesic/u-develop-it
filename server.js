require('dotenv').config();
const mysql = require('mysql2');
const gradient = require('gradient-string');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username
        user: process.env.DB_USER,
        // MySQL password
        password: process.env.DB_PASSWORD,
        database: 'election'
    },
    console.log(gradient('red', 'white', 'blue')('Connected to the election database.'))
)

// GET a list of all potential candidates
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// })

// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// })

// DELETE a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// CREATE a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//                 VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// })

// CATCHALL Default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(gradient.atlas(`Server running on port ${PORT} || http://localhost:${PORT}`));
})