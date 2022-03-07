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

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

// CATCHALL Default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(gradient.atlas(`Server running on port ${PORT} || http://localhost:${PORT}`));
})