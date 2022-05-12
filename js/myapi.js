const express = require('express')
const app = express()
app.listen(80, () => {
    console.log('http://127.0.0.1');
})
app.use(express.urlencoded({
    extended: true
}))
const rounter = require('./apiRount')

app.use('/api', rounter)