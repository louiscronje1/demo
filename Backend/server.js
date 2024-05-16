const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(express.json());



app.get('/Assignments', (req, res) => {
    res.sendFile(__dirname + '/Public/Assignments.json');
});

app.get('/Resources', (req, res) => {
    res.sendFile(__dirname + '/Public/Resources.json');
});

app.get('/Tasks', (req, res) => {
    res.sendFile(__dirname + '/Public/Tasks.json');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});