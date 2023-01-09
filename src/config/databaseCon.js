const mysql = require ('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    database:'Stores',
    user: 'root',
    password:'password'
});

module.exports= connection;