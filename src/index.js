const express = require('express');
const routers = require('./routers/routers.js');
const mysql = require('mysql');
const connection = require('./config/databaseCon.js');

const app = express();
//BODY-PARSER
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.set('port', process.env.PORT | 3000);


//ROUTERS
app.use(routers);

app.get ('/api/hello', (req,res)=>{
    let sql= "SELECT *FROM store";
    connection.query(sql, (err,results)=>{
        if(err) throw err;
        res.send(results);
    });
});





const port = process.env.PORT || 3000;
app.listen(app.get('port'), ()=>{
    connection.connect(function(err){
        if(err) throw err;
        console.log('Database connected');
    });
    
});

console.log("Server conectado "+port);