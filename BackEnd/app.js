const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const mysql = require('mysql');

const app =express();
app.use(cors())
app.use(bodyParser.json())

//Db Connect

const connection = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password :'root',
    database:'postdata'

})

connection.connect((err)=>{
    if(err) throw err;
    console.log("Database Connected Successfully");
    // var sql = "CREATE TABLE users (id INT,name VARCHAR(255))"
    // connection.query(sql,(err,result)=>{
    //     if(err) throw err;
    //     console.log("Table Created Successfully");
    // })
})

//Add User
app.get('/getusers',(req,res)=>{
    res.send({
        message:'Success'
    })
})

app.post('/users',(req,res)=>{
    const  {name,rollNo} = req.body
    console.log(name)
    console.log(rollNo)
    connection.query('INSERT INTO users(name,rollNo) values(?,?)',[name,rollNo],(err,results)=>{
        if(err) throw err;
    if(!name||!rollNo){
        res.status(400).send({
            message : "Enter Name and RollNo"
        })
    }
        res.status(200).send({ message:results.affectedRows+ " " +'User Added Successfully' });
    })

})

app.listen(3008, () => {
    console.log("Server running successfully on 3008");
  });