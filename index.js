require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

//Home Page
app.get('/', (req, res)=> {
    res.send('Hello world!')
})
app.get('*', (req, res) => {
    res.status(404).send('Your still here, but this page is not built yet.')
})

app.listen(process.env.PORT, function () {
    console.log('listening on Port 3000')
})