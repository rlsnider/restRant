const router = require('express').Router()

//NEW Route
router.get('/new', (req, res) => {
  res.render('places/new')
})
//POST /places
router.post('/', (req, res) => {
  res.send('POST /places stub')
})
//GET /places
router.get('/', (req, res)=> {
    
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/lights.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Coffee.jpg'
      }]
      

    res.render('places/index', { places })
})


module.exports = router
