const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, '../frontend')));


app.get('/generate', (req, res) => {
    const length = parseInt(req.query.length) || 12;
    if (length < 8 || length > 32) {
        return res.status(400).json({ error: "Length must be between 8 and 32" });
    }

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    res.json({ password });
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
