const fs = require('fs');

globalVar = 'This is a global variable';

function readFile(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    return data;
}

//call back hell
function readFiles(callback) {
    fs.readFile('file1.txt', 'utf8', (err, data1) => {
        fs.readFile('file2.txt', 'utf8', (err, data2) => {
            fs.readFile('file3.txt', 'utf8', (err, data3) => {
                callback(data1 + data2 + data3);
            });
        });
    });
}

readFiles((data) => {
    console.log(data);
});


function printGlobalVar() {
    console.log(globalVar);
}

function unusedFunction() {
    console.log('This function is never used');
}

function anotherFunction() {
    console.log('This function is used');
}
