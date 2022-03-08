const mysql = require("mysql2");
const gradient = require("gradient-string");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username
    user: process.env.DB_USER,
    // MySQL password
    password: process.env.DB_PASSWORD,
    database: "election",
  },
  console.log(
    gradient("red", "white", "blue")("Connected to the election database.")
  )
);

module.exports = db;