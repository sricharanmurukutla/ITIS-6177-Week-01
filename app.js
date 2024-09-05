const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

app.listen(3000, () => {
    console.log('Express server running at http://127.0.0.1:3000/');
});
