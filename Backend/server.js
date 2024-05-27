// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.static('public'));

// app.use(express.json());



// app.get('/Assignments', (req, res) => {
//     res.sendFile(__dirname + '/Public/Assignments.json');
// });

// app.get('/Resources', (req, res) => {
//     res.sendFile(__dirname + '/Public/Resources.json');
// });

// app.get('/Tasks', (req, res) => {
//     res.sendFile(__dirname + '/Public/Tasks.json');
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Duration of the delay in milliseconds
const delay = 1000; // This sets a 1000 millisecond (1 second) delay

app.use(express.static('public'));
app.use(express.json());

// Middleware to introduce variable delay
app.use((req, res, next) => {
    // Random delay between 800ms and 1200ms
    const delay = Math.floor(Math.random() * (1200 - 800 + 1) + 800);
    setTimeout(next, delay);
});


app.get('/Assignments', (req, res) => {
    setTimeout(() => {
        res.sendFile(__dirname + '/Public/Assignments.json');
    }, 1000);  // Delay specifically for assignments
});

app.get('/Resources', (req, res) => {
    setTimeout(() => {
        res.sendFile(__dirname + '/Public/Resources.json');
    }, 500);  // Shorter delay for resources
});

app.get('/Tasks', (req, res) => {
    setTimeout(() => {
        res.sendFile(__dirname + '/Public/Tasks.json');
    }, 1500);  // Longer delay for tasks
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
