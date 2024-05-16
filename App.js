const express = require('express');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(cookieParser());

// Inyección SQL
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

// Uso de eval
app.get('/eval', (req, res) => {
    const userCode = req.query.code;
    eval(userCode);
    res.send('Code executed');
});

// Código Sin Manejo de Errores
app.get('/readfile', (req, res) => {
    const data = fs.readFileSync('example.txt', 'utf8');
    res.send(data);
});

// Callback Hell
function readFiles(callback) {
    fs.readFile('file1.txt', 'utf8', (err, data1) => {
        fs.readFile('file2.txt', 'utf8', (err, data2) => {
            fs.readFile('file3.txt', 'utf8', (err, data3) => {
                callback(data1 + data2 + data3);
            });
        });
    });
}

app.get('/readfiles', (req, res) => {
    readFiles((data) => {
        res.send(data);
    });
});

// Variables Globales
globalVar = 'This is a global variable';

app.get('/globalvar', (req, res) => {
    res.send(globalVar);
});

// Uso de Información Sensible en el Código
const secretKey = 'mySecretKey123'; // Información sensible hardcodeada

function encrypt(data) {
    // Código de encriptación usando secretKey
    return data + secretKey; // Simulación de encriptación
}

app.get('/encrypt', (req, res) => {
    const encryptedData = encrypt('myData');
    res.send(encryptedData);
});

// Uso Inseguro de Cookies
app.get('/', (req, res) => {
    res.cookie('session', '12345', { httpOnly: false }); // No se establece httpOnly
    res.send('Cookie set');
});

// Falta de Validación de Entradas del Usuario
app.post('/user', (req, res) => {
    const user = req.body;
    // Falta de validación de los datos del usuario
    res.send(`User created: ${user.name}`);
});

// Manejo Inadecuado de Errores
app.get('/data', (req, res) => {
    try {
        const data = getDataFromDatabase(); // Supongamos que esta función puede lanzar una excepción
        res.send(data);
    } catch (err) {
        // No se maneja adecuadamente el error
        res.send('An error occurred');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
