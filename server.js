require("dotenv").config();
const gradient = require("gradient-string");
const express = require("express");
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use API routes
app.use('/api', apiRoutes);

// CATCHALL Default response for any other request (not found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
app.listen(PORT, () => {
  console.log(
    gradient.atlas(`Server running on port ${PORT} || http://localhost:${PORT}`)
  );
});
