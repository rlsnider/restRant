// MODULES AND GLOBALS
require('dotenv').config()
const express = require('express')
const app = express()

// EXPRESS SETTINGS
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//CONTROLLERS & ROUTES
app.use('/places', require('./controllers/places'))

//Home Page
app.get('/', (req, res)=> {
    res.render('home');
})
//Error Page
app.get('*', (req, res) => {
    res.render('error404');
})

app.listen(process.env.PORT, function () {
    console.log('listening on Port 3000');
})