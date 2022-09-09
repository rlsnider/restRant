const express = require('express')
const app = express()

//Home Page
app.get('/', (req, res)=> {
    res.send('Hello world!')
})
app.listen(3000, function () {
    console.log('listening on Port 3000')
})