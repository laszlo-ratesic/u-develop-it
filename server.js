const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const gradient = require('gradient-string');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(gradient.atlas(`Server running on port ${PORT} || http://localhost:${PORT}`));
})