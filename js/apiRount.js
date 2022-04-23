const express = require('express')
const rounter = express.Router()
const cors = require("cors")
const mysql = require('mysql')

rounter.use(cors());
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456x',
    database: 'log'
})
var queryGet;

db.query('select * FROM wildcat', (err, results) => {
    if (err) {
        return console.log(err.message);
    }
    queryGet = results;
})


rounter.get('/get', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send({
        status: 0, //0表示成功，1表示失败
        msg: 'get请求成功',
        data: queryGet
    })
})

module.exports = rounter;