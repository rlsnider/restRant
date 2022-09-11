const router = require('express').Router()

router.get('/', (req, res)=> {
    res.send('GET /places, this will be a list of restaurants')
})

module.exports = router
