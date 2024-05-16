// Inyeccion de SQL
const express = require('express');
const mysql = require('mysql');
const app = express();

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test'
    });

    connection.connect();
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    connection.query(query, (error, results) => {
        if (error) {
            res.status(500).send('Server Error');
            return;
        }
        res.json(results);
    });
    connection.end();
});

app.get('/eval', (req, res) => {
    const userCode = req.query.code;
    eval(userCode);
    res.send('Code executed');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
