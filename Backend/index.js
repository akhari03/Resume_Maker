const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Handle form submission
app.post('/form_submit', (req, res) => {
    const formData = req.body;
    console.log('Form Data:', formData);

    // Respond with a success message
    res.json({ message: 'Form data received successfully' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});