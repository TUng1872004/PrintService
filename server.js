const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the login.html file
app.get('/get-html', (req, res) => {
    const filePath = path.resolve(__dirname, '../UI/Login/login.html');

    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(err.status || 500).send('Error loading HTML file');
        }
    });
});

// Handle 404 Not Found
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
