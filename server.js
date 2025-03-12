const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'UI', 'Login', 'login.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error loading HTML file:', err);
            res.status(500).send('Error loading HTML file');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
