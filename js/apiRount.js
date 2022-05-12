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
var getre
// 查找

rounter.get('/get', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.query('select * FROM wildcat', (err, results) => {
        if (err) {
            return console.log(err.message);
        }
        queryGet = results;
    })
    res.send({
        status: 0, //0表示成功，1表示失败
        msg: 'get请求成功',
        data: queryGet
    })
})


rounter.get('/getone', (req, res) => {
    let datadel = req.query
    var id = JSON.parse(JSON.stringify(datadel.id))
    var time = JSON.parse(JSON.stringify(datadel.time))
    console.log(id + time);
    res.header("Access-Control-Allow-Origin", "*");

    const promise = new Promise((resolve, reject) => {
        db.query('select * FROM wildcat WHERE wildcatId=? AND time=?', [id, time], (err, results) => {
            if (err) {
                return console.log(err.message);
            }
            getre = results;
            resolve(getre)
        })
    }).then(value => {
        res.send({
            status: 0, //0表示成功，1表示失败
            msg: 'get请求成功',
            data: value
        })
    })

})



// 删除操作
rounter.post('/del', (req, res) => {
    let datadel = req.query
    var id = JSON.parse(JSON.stringify(datadel.id))
    var time = JSON.parse(JSON.stringify(datadel.time))
    db.query('DELETE FROM wildcat WHERE wildcatId=? AND time=?', [id, time], (err, results) => {
        if (err) {
            return console.log(err.message);
        }
        if (results.affectedRows === 1) {
            console.log('删除成功');
        }
    })
    res.send({
        status: 0,
        msg: 'POST请求成功',
        data: datadel
    })
})

// 添加操作
rounter.post('/add', (req, res) => {
    let datadel = req.query
    console.log(datadel);
    const sqlStr = 'insert into wildcat (wildcatId,time,machineSpeed,panelSpeed,gas,hposition,hload,torque,footage,wtime,ecd,wtdeep,wdeep,etdeep,edeep,wildcatpress,pumppress,outtemperature,intemperature,outflow,inflow,vflow) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
    db.query(sqlStr, [datadel.id, datadel.time, datadel.machineSpeed, datadel.panelSpeed, datadel.gas, datadel.hposition, datadel.hload, datadel.torque, datadel.footage, datadel.wtime, datadel.ecd, datadel.wtdeep, datadel.wdeep, datadel.etdeep, datadel.edeep, datadel.wildcatpress, datadel.pumppress, datadel.outtemperature, datadel.intemperature, datadel.outflow, datadel.inflow, datadel.vflow], (err, results) => {
        if (err) {
            return console.log(err.message);
        }
        if (results.affectedRows === 1) {
            console.log('插入成功');
        }
    })
    res.send({
        status: 0,
        msg: 'POST请求成功',
        data: datadel
    })
})
// 更新
rounter.post('/update', (req, res) => {
    let datadel = req.query
    console.log(datadel);
    const sqlStr = 'UPDATE wildcat SET machineSpeed=?,panelSpeed=?,hposition=?,gas=?,hload=?,torque=?,footage=?,wtime=?,ecd=?,wtdeep=?,wdeep=?,etdeep=?,edeep=? ,wildcatpress=?,pumppress=?,outtemperature=?,intemperature=?,outflow=?,inflow=?,vflow=? WHERE wildcatId=? AND time=?'
    db.query(sqlStr, [datadel.machineSpeed, datadel.panelSpeed, datadel.hposition, datadel.gas, datadel.hload, datadel.torque, datadel.footage, datadel.wtime, datadel.ecd, datadel.wtdeep, datadel.wdeep, datadel.etdeep, datadel.edeep, datadel.wildcatpress, datadel.pumppress, datadel.outtemperature, datadel.intemperature, datadel.outflow, datadel.inflow, datadel.vflow, datadel.id, datadel.time], (err, results) => {
        if (err) {
            return console.log(err.message);
        }
        if (results.affectedRows === 1) {
            console.log('修改成功');
        }
        console.log(results);
    })
    res.send({
        status: 0,
        msg: 'POST请求成功',
        data: datadel
    })
})
module.exports = rounter;